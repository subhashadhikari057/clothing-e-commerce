const express = require("express");
const passport = require("passport");

const {
  register,
  login,
  getProfile,
  logout,
  refreshToken,
  changePassword
} = require("../controllers/authController");

const protect = require("../middleware/auth");
const validate = require("../middleware/validate");
const { registerValidator, loginValidator } = require("../validators/authValidator");
const { authLimiter } = require("../middleware/rateLimiter");
const generateToken = require("../utils/generateToken");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/* 🧾 AUTHENTICATION ROUTES                                                   */
/* -------------------------------------------------------------------------- */

// 🛡️ Register user (validates input before controller runs)
router.post("/register", registerValidator, validate, register);

// 🔐 Login user with rate limiting and validation
router.post("/login", loginValidator, validate, authLimiter, login);

// 🔒 Get logged-in user's profile (requires valid token)
router.get("/profile", protect, getProfile);

// 🚪 Logout user (clears JWT cookie)
router.post("/logout", logout);

// ♻️ Refresh JWT from valid cookie token
router.get("/refresh-token", refreshToken);

// 🔑 Change password (requires old password, protected route)
router.put("/change-password", protect, changePassword);


/* -------------------------------------------------------------------------- */
/* 🌐 GOOGLE AUTH ROUTES                                                      */
/* -------------------------------------------------------------------------- */

// Step 1: Redirect user to Google OAuth screen
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Handle Google's OAuth redirect callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login", // On failure, redirect to login page (can be frontend URL)
    session: false             // Disable session for JWT-based auth
  }),
  (req, res) => {
    // On success, generate JWT for the user and send it via redirect
    const token = generateToken(req.user._id);
    res.redirect(`http://localhost:3000/google-success?token=${token}`);
  }
);

module.exports = router;
