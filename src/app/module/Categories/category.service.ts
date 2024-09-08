import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
  const isExist = await Category.find({ title: payload.title });
  if (isExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Category already exists");
  }
  const result = await Category.create(payload);
  return result;
};
const getCategoriesFromDB = async () => {
  const result = await Category.find();
  return result;
};

const deleteACategoryFromDB = async (id: string) => {
  const result = await Category.findOneAndDelete({ _id: id });
  return result;
};
const updateACategoryFromDB = async (
  id: string,
  payload: Partial<TCategory>
) => {
  const result = await Category.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  updateACategoryFromDB,
  getCategoriesFromDB,
  deleteACategoryFromDB,
};
