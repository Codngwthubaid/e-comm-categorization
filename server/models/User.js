import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  selectedCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

export default mongoose.model("User", userSchema);
