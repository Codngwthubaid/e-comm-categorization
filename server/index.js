import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import categoryRoutes from "./routes/category.routes.js";

dotenv.config();
connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://e-comm-categorization.vercel.app/"
];

const app = express();
app.use(cors(
  {
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }
));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
