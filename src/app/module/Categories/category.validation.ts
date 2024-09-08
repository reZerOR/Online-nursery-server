import { z } from "zod";

const categorySchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    imgUrl: z.string().url("Image URL must be a valid URL"),
  }),
});

export const CategoryValidation = {
  categorySchema,
};
