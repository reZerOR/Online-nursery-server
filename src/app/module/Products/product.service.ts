import { title } from "process";
import Product from "./product.model";
import { TProduct } from "./products.interface";
import { AppError } from "../../errors/AppError";
import httpStatus from "http-status";

const createProductIntoDB = async (payload: TProduct) => {
  const isExist = await Product.findOne({ title: payload.title });
  if (isExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This product is already exists"
    );
  }
  const result = await Product.create(payload);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
