import { z } from "zod";

const productSchema = z.object({
    body: z.object({
      title: z.string().min(1, { message: "Title is required" }).trim(),
      description: z.string().min(1, { message: "Description is required" }),
      price: z.number().min(0, { message: "Price must be greater than or equal to 0" }),
      quantity: z.number().min(0, { message: "Quantity must be greater than or equal to 0" }),
      category: z.string({ message: "Invalid category" }),
      rating: z.number().min(0).max(5).optional().default(0),
      imageUrl: z.string().url({ message: "Invalid URL format for the image" }),
    }),
  });

export const ProductValidation = {
    productSchema
}