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

export const ProductController = {
    createProduct
}