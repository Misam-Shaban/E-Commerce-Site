import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// 1. Port ko dynamic banaya (Agar .env mein PORT nahi hai to 5000 use hoga)
const PORT = process.env.PORT || 5000;

// Database connect karein
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API WORKING...");
});

// 2. static 5000 ki jagah variable PORT use kiya
app.listen(PORT, () => {
  console.log(`Server is Running on PORT http://localhost:${PORT}`);
});
