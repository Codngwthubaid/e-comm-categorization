import Category from "../models/Category.js";
import User from "../models/User.js";

export const getCategories = async (req, res) => {
  const { page = 1, limit = 6 } = req.query;
  const categories = await Category.find()
    .skip((page - 1) * limit)
    .limit(parseInt(limit));
  const total = await Category.countDocuments();
  res.json({ categories, total });
};

export const selectCategories = async (req, res) => {
  const { categoryIds } = req.body;
  const user = await User.findById(req.user._id);
  user.selectedCategories = categoryIds;
  await user.save();
  res.json({ message: "Categories saved" });
};

export const getSelectedCategories = async (req, res) => {
  const user = await User.findById(req.user._id).populate("selectedCategories");
  res.json(user.selectedCategories);
};
