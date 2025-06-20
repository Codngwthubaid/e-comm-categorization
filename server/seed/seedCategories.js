import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import Category from "../models/Category.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const seedCategories = async () => {
  await Category.deleteMany();
  for (let i = 0; i < 100; i++) {
    await Category.create({
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
      image: faker.image.urlLoremFlickr({ category: 'business' }),
    });
  }
  console.log("Seeded 100 categories");
  process.exit();
};

seedCategories();
