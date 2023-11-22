import express from "express";
import {
  allProductsController,
  deleteController,
  getProductByIdController,
  NewProductsController,
} from "./controllers/productsControllers";
const productsRouter = express.Router();

productsRouter.get("/", allProductsController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.post("/", NewProductsController);
productsRouter.put("/:id",);
productsRouter.delete("/:id", deleteController);

export default productsRouter;