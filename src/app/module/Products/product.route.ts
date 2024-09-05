import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidation } from "./product.validation";
import { ProductController } from "./product.controller";

const router = Router();

router.post(
  "/",
  validateRequest(ProductValidation.productSchema),
  ProductController.createProduct
);

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
router.put(
  "/:id",
  validateRequest(ProductValidation.productSchema),
  ProductController.updateById
);
router.delete("/:id", ProductController.deleteProduct);

export const ProductRoutes = router;
