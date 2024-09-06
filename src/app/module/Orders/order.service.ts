import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import Product from "../Products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const { items } = payload;

  for (const item of items) {
    const product = await Product.findById(item.product);
    //Check if the product available
    if (!product) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        `Product with ID ${item.product} not found`
      );
    }

    // Check if the quantity is available
    if (product.quantity < item.quantity) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        `Insufficient stock for product: ${product.title}. Only ${product.quantity} available`
      );
    }
  }

  const result = await Order.create(payload);

  // If the order is saved, decrease the product quantities
  for (const item of items) {
    const product = await Product.findById(item.product);

    if (product) {
      // Decrease product quantity
      product.quantity -= item.quantity;

      // Save the updated product
      await product.save();
    }
  }

  return result;
};

export const OrderService = {
  createOrderIntoDB,
};
