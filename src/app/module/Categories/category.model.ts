import { Schema, model } from "mongoose";
import { TCategory } from "./category.interface";

// Mongoose schema for Category
const categorySchema = new Schema<TCategory>(
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

export const Category = model<TCategory>("Category", categorySchema);
