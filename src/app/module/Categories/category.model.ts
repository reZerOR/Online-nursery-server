import { Schema, model } from "mongoose";

// Mongoose schema for Category
const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = model("Category", categorySchema);
