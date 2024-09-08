import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
  const isExist = await Category.find({ title: payload.title });
  if (isExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Category dosen't exists");
  }
  const result = await Category.create(payload);
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
};
