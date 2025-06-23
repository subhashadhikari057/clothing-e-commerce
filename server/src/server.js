// src/server.js
const express = require("express");
const dotenv  = require("dotenv");
const cors    = require("cors");
const connectDB = require("./config/db");   // NEW

dotenv.config();
const app  = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send("Ambika Pashmina API 🧣 is running"));

connectDB();                                // NEW

app.listen(PORT, () => {
  console.log(`➜  API ready at http://localhost:${PORT}`);
});
