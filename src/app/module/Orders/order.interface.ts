import { Types } from "mongoose";

// Interface for Order Item (each product in the order)
export interface TOrderItem {
    product: Types.ObjectId; 
    quantity: number;
    price: number;   
  }
  
  // Interface for Order Document
  export interface TOrder {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    items: TOrderItem[];         
    totalAmount: number;       
    paymentMethod: "Stripe" | "Cash on Delivery";  
    isPaid: boolean;           
    paidAt?: Date;              
    createdAt: Date;            
    updatedAt: Date;            
  }