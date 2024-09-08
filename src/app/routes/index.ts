import { Router } from "express";
import { ProductRoutes } from "../module/Products/product.route";
import { OrderRoutes } from "../module/Orders/order.route";
import { CategoryRoutes } from "../module/Categories/category.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: ProductRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
  {
    path: "/category",
    route: CategoryRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
