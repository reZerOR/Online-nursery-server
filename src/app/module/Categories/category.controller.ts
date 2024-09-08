import httpStatus from "http-status";
import { catchAsync } from "../../utiles/catchAsync";
import { sendResponse } from "../../utiles/sendResponse";
import { CategoryServices } from "./category.service";

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategoryIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category added successfully",
    data: result,
  });
});
const getCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.getCategoriesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});
const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.deleteACategoryFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});
const updateACategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.updateACategoryFromDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  });
});

export const CategoryController = {
    createCategory,
    getCategory,
    deleteCategory,
    updateACategory
}
