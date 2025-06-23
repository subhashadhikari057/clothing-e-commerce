/**
 * src/middleware/auth.js
 * ----------------------
 * Protects private routes by validating a JWT that can come from:
 *   1) HttpOnly cookie  -> req.cookies.token
 *   2) Authorization header -> "Bearer <token>"
 * If valid, attaches the user object (sans password) to req.user.
 */

const jwt  = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    let token = null;

    /* ────────────────────────────────────────────────
       1️⃣  Check cookie first (because frontend sends it automatically)
    ─────────────────────────────────────────────────*/
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    /* ────────────────────────────────────────────────
       2️⃣  Fallback to Authorization header (useful for tools like Postman)
    ─────────────────────────────────────────────────*/
    else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No token found
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    /* ────────────────────────────────────────────────
       3️⃣  Verify token & attach user
    ─────────────────────────────────────────────────*/
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    req.user = user; // attach cleaned user object
    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = protect;
