/* ──────────────────────────────────────────────────────────────────────────
   routes/authRoutes.js  – Ambika Pashmina
   Handles local JWT auth and Google OAuth (both redirect & token-exchange)
────────────────────────────────────────────────────────────────────────── */

const express   = require("express");
const passport  = require("passport");
const axios     = require("axios");               // used in verifyGoogleToken

/* ── Local controller functions ───────────────────────────────────────── */
const {
  register,
  login,
  getProfile,
  logout,
  refreshToken,
  changePassword,
} = require("../controllers/authController");

/* ── Middleware & helpers ─────────────────────────────────────────────── */
const protect          = require("../middleware/auth");
const validate         = require("../middleware/validate");
const { authLimiter }  = require("../middleware/rateLimiter");
const {
  registerValidator,
  loginValidator,
} = require("../validators/authValidator");

const generateToken    = require("../utils/generateToken");   // issues JWT
const User             = require("../models/User");

/* ── Express router ───────────────────────────────────────────────────── */
const router = express.Router();

/* --------------------------------------------------------------------- */
/* 🧾 LOCAL AUTH ROUTES                                                  */
/* --------------------------------------------------------------------- */

// POST /api/auth/register
router.post("/register", registerValidator, validate, register);

// POST /api/auth/login
router.post("/login", loginValidator, validate, authLimiter, login);

// GET /api/auth/profile   (protected)
router.get("/profile", protect, getProfile);

// POST /api/auth/logout
router.post("/logout", logout);

// GET /api/auth/refresh-token
router.get("/refresh-token", refreshToken);

// PUT /api/auth/change-password   (protected)
router.put("/change-password", protect, changePassword);

/* --------------------------------------------------------------------- */
/* 🌐 GOOGLE OAUTH – REDIRECT FLOW (OPTIONAL)                            */
/* Front-end redirects browser to /api/auth/google                       */
/* Google returns to /api/auth/google/callback                           */
/* --------------------------------------------------------------------- */

// Step 1 – Kick off OAuth consent screen
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2 – Google redirects back here
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
    session: false,
  }),
  (req, res) => {
    // Successful Google login ⇒ issue our JWT & redirect to front-end
    const jwt = generateToken(req.user._id, req.user.role);
    res.redirect(`http://localhost:3000/google-success?token=${jwt}`);
  }
);

/* --------------------------------------------------------------------- */
/* 🌐 GOOGLE OAUTH – POST TOKEN FLOW (for @react-oauth/google)           */
/* Front-end gets access_token via useGoogleLogin, then POSTs it here    */
/* --------------------------------------------------------------------- */

router.post("/google", async (req, res) => {
  try {
    const { token: accessToken } = req.body;
    console.log("🔐 Token received at backend:", accessToken); // ✅ LOG THIS
    if (!accessToken)
      return res.status(400).json({ message: "Token missing" });

    /* 1️⃣ Verify access_token with Google `userinfo` endpoint */
    const { data: gUser } = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    // gUser contains: sub (id), email, name, picture, etc.
    const googleId = gUser.sub;

    /* 2️⃣ Find existing user or create new */
    let user = await User.findOne({ googleId });
    if (!user) {
      user = await User.create({
        googleId,
        email: gUser.email,
        name: gUser.name,
        avatar: gUser.picture,
        role: "customer", // default role; adjust to your logic
        provider: "google",
      });
    }

    /* 3️⃣ Issue our JWT */
    const jwt = generateToken(user._id, user.role);

    /* 4️⃣ Send back to front-end */
    res.json({ token: jwt });
  } catch (err) {
    console.error("Google POST auth error:", err.message);
    res.status(401).json({ message: "Invalid Google token" });
  }
});

module.exports = router;
