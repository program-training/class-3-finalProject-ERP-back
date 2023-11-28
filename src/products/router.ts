import express from "express";
import {
  allProductsController,
  deleteProductController,
  getProductByIdController,
  newProductsController,
  editProductController,
  getCategoryByIdController,
  tenProductsController,
} from "./controllers/productsControllers";
import { validateProductUpdate } from "../users/midelweres/updateValidation";
const productsRouter = express.Router();

productsRouter.get("/", allProductsController);
productsRouter.get("/:product", tenProductsController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.post("/", newProductsController);
productsRouter.put("/:id", editProductController);
productsRouter.delete("/:id", deleteProductController);
// להעביר לshop
productsRouter.get("/category/:id", getCategoryByIdController);

export default productsRouter;
