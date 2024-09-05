import httpStatus from "http-status";
import { catchAsync } from "../../utiles/catchAsync";
import { sendResponse } from "../../utiles/sendResponse";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res)=>{
    const result = await ProductServices.createProductIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product created successfully',
        data: result
    })
})
const getProducts = catchAsync(async (req, res)=>{
    const result = await ProductServices.getProdutsFromDB(req?.query)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product retrived successfully',
        data: result
    })
})
const getProductById = catchAsync(async (req, res)=>{
    const {id} = req.params
    const result = await ProductServices.getProuductByIdFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product retrived successfully',
        data: result
    })
})
const  updateById = catchAsync(async (req, res)=>{
    const {id} = req.params
    const result = await ProductServices.updateProductIntoDB(id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product updated successfully',
        data: result
    })
})

const deleteProduct = catchAsync(async(req, res)=>{
    const {id} = req.params
    const result = await ProductServices.deleteProductFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product deleted successfully',
        data: result
    })
})

export const ProductController = {
    createProduct,
    getProducts,
    getProductById,
    updateById,
    deleteProduct
}