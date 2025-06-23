const rateLimit = require("express-rate-limit");

// Limit requests to 100 per 15 minutes per IP (can be adjusted)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    message: "Too many requests from this IP. Please try again later.",
    type: "RATE_LIMIT"
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// More strict limiter (optional: for login, etc.)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // Only allow 10 login attempts per IP
  message: {
    message: "Too many login attempts. Please try again later.",
    type: "AUTH_RATE_LIMIT"
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { generalLimiter, authLimiter };
