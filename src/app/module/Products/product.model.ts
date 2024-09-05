import { model, Schema } from "mongoose";
import { TProduct } from "./products.interface";

export const categories = [
  "Flowering Plants",
  "Indoor Plants",
  "Fruit Trees",
  "Herbs & Medicinal Plants",
  "Ornamental Plants",
  "Vegetable Plants",
  "Shrubs & Bushes",
  "Climbers & Creepers",
  "Aquatic Plants",
  "Seeds & Bulbs",
];

const ProductSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: categories,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model<TProduct>("Product", ProductSchema);

export default Product;
