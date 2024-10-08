import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./category.validation";
import { CategoryController } from "./category.controller";

const route = Router();

route.post(
  "/",
  validateRequest(CategoryValidation.categorySchema),
  CategoryController.createCategory
);

route.get("/", CategoryController.getCategory);

route.put(
  "/:id",
  validateRequest(CategoryValidation.categorySchema),
  CategoryController.updateACategory
);

route.delete("/:id", CategoryController.deleteCategory);

export const CategoryRoutes = route;
