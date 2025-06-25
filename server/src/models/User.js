/**
 * src/models/User.js
 * ------------------
 * Mongoose schema + model for site users.
 *  - Hashes password before save (only when password exists/changes)
 *  - Allows Google-OAuth users to sign up without a local password
 *  - Provides an instance method to compare passwords during login
 */

const mongoose = require("mongoose");
const bcrypt   = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    /* ───────────────────────────────────────────────────────────
       BASIC USER PROFILE
    ─────────────────────────────────────────────────────────── */
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

    /* ───────────────────────────────────────────────────────────
       LOCAL PASSWORD
       Required ONLY if the user is NOT a Google user
    ─────────────────────────────────────────────────────────── */
    password: {
      type: String,

      // ✅ Conditionally required: if no googleId, user must set password
      required: function () {
        return !this.googleId;
      },

      minlength: 6,
      select: false, // do not return hash by default
    },

    /* ───────────────────────────────────────────────────────────
       GOOGLE AUTH
       If user signs in with Google, we store Google ID here
    ─────────────────────────────────────────────────────────── */
    googleId: {
      type: String,
      default: null, // local users won't have this
    },

    /* ───────────────────────────────────────────────────────────
       ROLE / PERMISSIONS
    ─────────────────────────────────────────────────────────── */
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

/* ──────────────────────────────────────────────────────────────
   PRE-SAVE HOOK
   Hash plaintext password if (and only if) it is new or changed
────────────────────────────────────────────────────────────── */
userSchema.pre("save", async function (next) {
  // If no password field (Google user) OR password unchanged → skip
  if (!this.password || !this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/* ──────────────────────────────────────────────────────────────
   INSTANCE METHOD
   Compare a candidate password with the hashed password
────────────────────────────────────────────────────────────── */
userSchema.methods.matchPassword = function (candidatePassword) {
  // ⬅ returns boolean promise
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
