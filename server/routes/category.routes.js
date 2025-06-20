import express from "express";
import {
  getCategories,
  selectCategories,
  getSelectedCategories,
} from "../controllers/category.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getCategories);
router.post("/select", authMiddleware, selectCategories);
router.get("/selected", authMiddleware, getSelectedCategories);

export default router;
