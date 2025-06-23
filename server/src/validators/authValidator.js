const { body } = require("express-validator");

exports.registerValidator = [
  body("name", "Name is required").trim().notEmpty(),
  body("email", "Valid email is required").isEmail().normalizeEmail(),
  body("password", "Password must be at least 6 characters").isLength({ min: 6 }),
];

exports.loginValidator = [
  body("email", "Valid email is required").isEmail().normalizeEmail(),
  body("password", "Password is required").notEmpty(),
];
