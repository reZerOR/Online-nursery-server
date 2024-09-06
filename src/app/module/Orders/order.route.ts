import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidation } from "./order.validation";
import { OrderController } from "./order.controller";

const router = Router();

router.post(
  "/",
  validateRequest(OrderValidation.orderSchema),
  OrderController.createOrder
);

export const OrderRoutes = router
