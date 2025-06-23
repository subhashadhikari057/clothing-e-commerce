const User = require("../models/User");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");
const CustomError = require("../utils/customError");

// Register new user
exports.registerUser = async ({ name, email, password }) => {
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new CustomError("User already exists", 400, "DUPLICATE");
  }

  const user = await User.create({ name, email, password });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user),
  };
};

// Login user
exports.loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.matchPassword(password))) {
    throw new CustomError("Invalid credentials", 401, "AUTH_ERROR");
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

// Get profile
exports.getUserProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new CustomError("User not found", 404, "NOT_FOUND");
  }

  return user;
};

// Refresh token
exports.refreshUserToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select("-password");

  if (!user) {
    throw new CustomError("User not found", 401, "NOT_FOUND");
  }

  const newToken = generateToken(user);

  return {
    token: newToken,
    user,
  };
};

// Change password
exports.changeUserPassword = async (userId, oldPassword, newPassword, confirmPassword) => {
  const user = await User.findById(userId).select("+password");

  if (!user) throw new CustomError("User not found", 404, "NOT_FOUND");

  const isMatch = await user.matchPassword(oldPassword);
  if (!isMatch) throw new CustomError("Old password is incorrect", 401, "AUTH_ERROR");

  if (newPassword !== confirmPassword) {
    throw new CustomError("New passwords do not match", 400, "VALIDATION_ERROR");
  }

  user.password = newPassword;
  await user.save();

  return { message: "Password updated successfully" };
};
