import httpStatus from "http-status";
import { catchAsync } from "../../utiles/catchAsync";
import { sendResponse } from "../../utiles/sendResponse";
import { OrderService } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
  {
    const result = await OrderService.createOrderIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Order create successfully",
      data: result,
    });
  }
});

export const OrderController = {
  createOrder,
};
