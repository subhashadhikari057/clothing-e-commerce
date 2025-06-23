/**
 * src/utils/generateToken.js
 * --------------------------
 * Creates a signed JWT with user ID payload.
 * Used for login and protected routes.
 */

const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

module.exports = generateToken;
