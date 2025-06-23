const dotenv = require("dotenv");
dotenv.config(); // ✅ load env vars first!

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const mongoSanitize = require("express-mongo-sanitize");
const { generalLimiter } = require("./middleware/rateLimiter");
const passport = require("passport");
require("./config/passport"); // ✅ now env vars will be loaded correctly






dotenv.config();
const app  = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(generalLimiter); // Global rate limiting for all routes
app.use(mongoSanitize());
app.use(passport.initialize());


app.get("/", (_req, res) => res.send("Ambika Pashmina API 🧣 is running"));

app.use("/api/auth", authRoutes);
app.use(errorHandler); // ⬅️ must be last


connectDB();                                // NEW

app.listen(PORT, () => {
  console.log(`➜  API ready at http://localhost:${PORT}`);
});
