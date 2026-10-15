if(process.env.NODE_ENV != "production")
{
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const wrapAsync = require("./utils/wrapAsync.js");
const Holding = require("./models/holdings.js");
const Position = require("./models/positions.js");
const User = require("./models/users.js");
const Order = require("./models/orders.js");
const {validateOrder, validateUser, userVerification, isLoggedIn} = require("./middleware.js");
const { createSecretToken } = require("./utils/SecretToken.js");
const jwt = require("jsonwebtoken");

const isProduction = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: false,
  sameSite: isProduction ? "none" : "lax",
  secure: isProduction ? true : false,
};

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

const app = express();
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app") ||
      !isProduction
    ) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;
const dbURL = process.env.ATLASDB_URL

main()
  .then(() => {
  console.log("Connected to MongoDB");
  })
  .catch(err => {
  console.log(err);
});

async function main() {
  await mongoose.connect(dbURL);
}

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Zerodha Replica API is active and running!" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.get("/allHoldings", wrapAsync(async(req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
}));

app.get("/allPositions", wrapAsync(async(req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
}));

app.get("/allOrders", wrapAsync(async(req, res) => {
  let allOrders = await Order.find({});
  res.json(allOrders);
}))

app.post("/newOrder", validateOrder, wrapAsync(async(req, res) => {
  let newOrder = new Order(req.body.order);
  await newOrder.save();
  res.status(201).json({ message: "Order placed successfully!", order: newOrder });
}));

app.post("/verify", userVerification);

app.post("/signup", validateUser, wrapAsync(async(req, res, next) => {
  try
  {
    const userPayload = req.body.user || req.body;
    const { email, password, phone, pin } = userPayload;
    const fullName = userPayload.fullName || userPayload.fullname || userPayload.username;

    const existingUser = await User.findOne({ email });
    if (existingUser)
    {
      return res.status(400).json({ message: "User already exists", success: false });
    }
    const user = await User.create({
      fullName,
      username: fullName,
      email,
      password,
      phone,
      pin: pin || "123456",
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        clientId: user.clientId,
        funds: user.funds,
      },
    });
  }
  catch (error)
  {
    next(error);
  }
}));

app.post("/login", wrapAsync(async(req, res, next) => {
  try {
    const { email, password, pin, clientId } = req.body;
    const identifier = (email || clientId || req.body.identifier || "").trim();

    if (!identifier || !password) {
      return res.status(400).json({ message: "Client ID / Email and password are required", success: false });
    }

    const user = await User.findOne({
      $or: [
        { email: identifier.toLowerCase() },
        { clientId: identifier.toUpperCase() },
        { username: identifier },
      ],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials. User not found.", success: false });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password", success: false });
    }

    const hasPin = Boolean(user.pin && user.pin.trim() !== "");

    // Case: User has a PIN configured, but PIN was not provided yet -> prompt for 2FA
    if (hasPin && !pin) {
      return res.status(200).json({
        success: true,
        requires2FA: true,
        message: "Password verified. Please enter your 6-digit Kite PIN to complete 2FA.",
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          clientId: user.clientId,
        },
      });
    }

    // Case: User has a PIN configured, and PIN was provided -> verify PIN
    if (hasPin && pin) {
      const isPinValid = await user.comparePin(pin);
      if (!isPinValid && user.pin !== pin) {
        return res.status(401).json({ message: "Incorrect 6-digit Kite PIN", success: false });
      }
    }

    // Authentication succeeded: User has no PIN (password-only) OR 2FA PIN was verified
    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      requires2FA: false,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        clientId: user.clientId,
        funds: user.funds,
      },
    });
  } catch (error) {
    next(error);
  }
}));

app.post("/logout", (req, res) => {
  res.clearCookie("token", cookieOptions);
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

app.post("/changePin", isLoggedIn, wrapAsync(async (req, res) => {
  const user = req.user;
  const { currentPin, newPin } = req.body;
  if (!newPin || !/^\d{6}$/.test(newPin)) {
    return res.status(400).json({ success: false, message: "New PIN must be exactly 6 digits" });
  }
  if (currentPin) {
    const isPinValid = await user.comparePin(currentPin);
    if (!isPinValid && user.pin !== currentPin) {
      return res.status(400).json({ success: false, message: "Incorrect current PIN" });
    }
  }
  user.pin = newPin;
  await user.save();
  res.status(200).json({ success: true, message: "PIN updated successfully!" });
}));

app.post("/changePassword", isLoggedIn, wrapAsync(async (req, res) => {
  const user = req.user;
  const { currentPassword, newPassword } = req.body;
  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({ success: false, message: "New password must be at least 6 characters" });
  }
  if (currentPassword) {
    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Incorrect current password" });
    }
  }
  user.password = newPassword;
  await user.save();
  res.status(200).json({ success: true, message: "Password updated successfully!" });
}));

app.post("/deleteAccount", isLoggedIn, wrapAsync(async (req, res) => {
  const user = req.user;
  const { password } = req.body;
  if (password) {
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Incorrect password" });
    }
  }
  await User.findByIdAndDelete(user._id);
  res.clearCookie("token", cookieOptions);
  res.status(200).json({ success: true, message: "Account deleted successfully" });
}));

app.use((err, req, res, next) => {
      const { statusCode = 500, message = "Something went wrong!" } = err;
      res.status(statusCode).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});