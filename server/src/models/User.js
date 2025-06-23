/**
 * src/models/User.js
 * ------------------
 * Mongoose schema + model for site users.
 *  - Hashes password before save
 *  - Provides a helper to compare passwords during login
 */

const mongoose = require("mongoose");
const bcrypt   = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 60,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,          // do not return hash by default
    },

    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

/* ──────────────────────────────────────────────
   Pre-save hook: hash plaintext password → hash
   Runs on .save() and .create()
────────────────────────────────────────────── */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();   // only if password changed
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/* ──────────────────────────────────────────────
   Instance method: compare candidate pwd → hash
────────────────────────────────────────────── */
userSchema.methods.matchPassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
