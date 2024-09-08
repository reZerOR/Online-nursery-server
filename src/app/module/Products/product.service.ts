import Product from "./product.model";
import { TProduct } from "./products.interface";
import { AppError } from "../../errors/AppError";
import httpStatus from "http-status";
import QueryBuilder from "../../builder/QueryBuilder";
import { Category } from "../Categories/category.model";
const searchFields = ["title", "description", "category"];

const createProductIntoDB = async (payload: TProduct) => {
  const isExist = await Product.findOne({ title: payload.title });
  if (isExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This product is already exists"
    );
  }
  const isCategoryExits = await Category.findOne({title: payload.category})
  if(!isCategoryExits){
    throw new AppError(httpStatus.BAD_REQUEST, "Category does't exsits")
  }

  const result = await Product.create(payload);
  return result;
};

const getProdutsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(searchFields)
    .filter()
    .sort()

  const result = await productQuery.modelQuery;
  return result;
};

const getProuductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductIntoDB = async (id: string, paylod: Partial<TProduct>) => {
  const result = await Product.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  });
  return result
};

const deleteProductFromDB = async(id: string)=>{
  const result = await Product.findByIdAndDelete(id)
  return result
}
export const ProductServices = {
  createProductIntoDB,
  getProdutsFromDB,
  getProuductByIdFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
