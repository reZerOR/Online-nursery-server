import { z } from "zod";


const orderItemSchema = z.object({
  product: z.string().min(1, { message: "Product ID is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  price: z.number().min(0, { message: "Price must be a positive number" }),
});


const shippingAddressSchema = z.object({
  street: z.string().min(1, { message: "Street address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  postalCode: z.string().min(1, { message: "Postal code is required" }),
  country: z.string().min(1, { message: "Country is required" }),
});

export const orderSchema = z.object({
  body: z.object({
    customerName: z.string().min(1, { message: "Customer name is required" }),
    customerEmail: z.string().email({ message: "Invalid email address" }),
    customerPhone: z.string().min(1, { message: "Customer phone is required" }),
    shippingAddress: shippingAddressSchema,
    items: z.array(orderItemSchema).min(1, { message: "At least one item is required" }),
    totalAmount: z.number().min(0, { message: "Total amount must be a positive number" }),
    paymentMethod: z.enum(["Stripe", "Cash on Delivery"], { message: "Invalid payment method" }),
    isPaid: z.boolean().optional().default(false),
    paidAt: z.date().optional(),
  }),
});