/**
 * src/controllers/authController.js
 * ---------------------------------
 * Handles request/response logic using service methods.
 */

const asyncHandler = require("express-async-handler");
const {
  registerUser,
  loginUser,
  getUserProfile,
  refreshUserToken,
  changeUserPassword
} = require("../services/authService");
const CustomError = require("../utils/customError");

/* ---------------------------------------------------------------------- */
/* @desc    Register new user
/* @route   POST /api/auth/register
/* @access  Public
/* ---------------------------------------------------------------------- */
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new CustomError("Please provide name, email, and password", 400, "VALIDATION_ERROR");
  }

  const userData = await registerUser({ name, email, password });
  res.status(201).json(userData);
});

/* ---------------------------------------------------------------------- */
/* @desc    Login user
/* @route   POST /api/auth/login
/* @access  Public
/* ---------------------------------------------------------------------- */
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError("Please provide email and password", 400, "VALIDATION_ERROR");
  }

  const { token, user } = await loginUser({ email, password });

  // ⛔️ Temporarily skipping cookie for Postman testing
  // res.cookie("token", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: "strict",
  //   maxAge: 7 * 24 * 60 * 60 * 1000
  // });

  res.json({
    message: "Login successful",
    token,
    user
  });
});

/* ---------------------------------------------------------------------- */
/* @desc    Get current user profile
/* @route   GET /api/auth/profile
/* @access  Private
/* ---------------------------------------------------------------------- */
exports.getProfile = asyncHandler(async (req, res) => {
  const user = await getUserProfile(req.user._id);
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  });
});

/* ---------------------------------------------------------------------- */
/* @desc    Logout user (clear cookie)
/* @route   POST /api/auth/logout
/* @access  Public
/* ---------------------------------------------------------------------- */
exports.logout = (_req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });
  res.json({ message: "Logged out successfully" });
};

/* ---------------------------------------------------------------------- */
/* @desc    Refresh JWT token from cookie
/* @route   GET /api/auth/refresh-token
/* @access  Public
/* ---------------------------------------------------------------------- */
exports.refreshToken = asyncHandler(async (req, res) => {
  const oldToken = req.cookies.token;

  if (!oldToken) {
    throw new CustomError("No token, please login again", 401, "NO_TOKEN");
  }

  const { token, user } = await refreshUserToken(oldToken);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  res.json({
    message: "Token refreshed",
    user
  });
});

/* ---------------------------------------------------------------------- */
/* @desc    Change user password (requires old + confirm)
/* @route   PUT /api/auth/change-password
/* @access  Private
/* ---------------------------------------------------------------------- */
exports.changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  if (!oldPassword || !newPassword || !confirmPassword) {
    throw new CustomError("All fields are required", 400, "VALIDATION_ERROR");
  }

  const result = await changeUserPassword(req.user._id, oldPassword, newPassword, confirmPassword);
  res.json(result);
});
