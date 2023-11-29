import express from "express";
import {
  allProductsController,
  deleteProductController,
  getProductByIdController,
  newProductsController,
  editProductController,
  tenProductsController,
} from "./controllers/productsControllers";

const productsRouter = express.Router();

productsRouter.get("/:id", getProductByIdController);
productsRouter.get("/", allProductsController);
// productsRouter.get("/:product", tenProductsController);
productsRouter.post("/", newProductsController);
productsRouter.put("/:id", editProductController);
productsRouter.delete("/:id", deleteProductController);


export default productsRouter;
