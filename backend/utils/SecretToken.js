require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY || "zerodha_replica_jwt_secret_token_key_2026", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};