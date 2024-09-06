import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const OrderSchema = new Schema<TOrder>(
    {
      customerName: {
        type: String,
        required: true,
        trim: true,
      },
      customerEmail: {
        type: String,
        required: true,
        trim: true,
      },
      customerPhone: {
        type: String,
        required: true,
      },
      shippingAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },
      items: [
        {
          product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
          quantity: { type: Number, required: true },
          price: { type: Number, required: true },
          _id: false
        },
      ],
      totalAmount: {
        type: Number,
        required: true,
      },
      paymentMethod: {
        type: String,
        enum: ["Stripe", "Cash on Delivery"],
        required: true,
      },
      isPaid: {
        type: Boolean,
        default: false,
      },
      paidAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

  export const Order = model<TOrder>('Order', OrderSchema)