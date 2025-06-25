const dotenv = require("dotenv");
dotenv.config();           // load env vars first

const express      = require("express");
const cors         = require("cors");
const cookieParser = require("cookie-parser");
const mongoSanitize= require("express-mongo-sanitize");
const passport     = require("passport");

const connectDB    = require("./config/db");
const authRoutes   = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");
const { generalLimiter } = require("./middleware/rateLimiter");
require("./config/passport");

const app  = express();
const PORT = process.env.PORT || 8080;

/* ── CORS with credentials ───────────────────────────── */
app.use(
  cors({
    origin: ["http://localhost:3000"], // add https://ambika-pashmina.com later
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

/* ── Global middleware ───────────────────────────────── */
app.use(express.json());
app.use(cookieParser());
app.use(generalLimiter);
app.use(mongoSanitize());
app.use(passport.initialize());

/* ── Routes ──────────────────────────────────────────── */
app.get("/", (_req, res) => res.send("Ambika Pashmina API 🧣 is running"));
app.use("/api/auth", authRoutes);

/* ── Error handler (must be last) ───────────────────── */
app.use(errorHandler);

/* ── Start server ───────────────────────────────────── */
connectDB();
app.listen(PORT, () =>
  console.log(`➜  API ready at http://localhost:${PORT}`)
);
