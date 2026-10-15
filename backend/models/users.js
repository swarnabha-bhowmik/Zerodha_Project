const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    fullName:
    {
        type: String,
        required: true,
        trim: true,
    },
    username:
    {
        type: String,
        trim: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone:
    {
        type: String,
        trim: true,
    },
    password:
    {
        type: String,
        required: true,
    },
    pin:
    {
        type: String,
        default: "123456",
    },
    clientId:
    {
        type: String,
        unique: true,
        default: () => "ZR" + Math.floor(1000 + Math.random() * 9000), // e.g. ZR5821
    },
    funds:
    {
        availableCash: { type: Number, default: 100000 },
        usedMargin: { type: Number, default: 0 },
    },
    createdAt:
    {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }

    if (this.isModified("pin")) {
        this.pin = await bcrypt.hash(this.pin, 12);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.comparePin = async function (candidatePin) {
    if (!this.pin) return false;
    try {
        const isMatch = await bcrypt.compare(candidatePin, this.pin);
        if (isMatch) return true;
    } catch {
        // In case PIN was saved as plain text
    }
    return candidatePin === this.pin;
};

module.exports = mongoose.model("User", userSchema);