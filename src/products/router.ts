import express from "express";
import {
  allProductsController,
  deleteController,
  getProductByIdController,
  NewProductsController,
  editProductController,
  getCategoryByIdController,
} from "./controllers/productsControllers";
const productsRouter = express.Router();

productsRouter.get("/", allProductsController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.post("/", NewProductsController);
productsRouter.put("/:id", editProductController);
productsRouter.delete("/:id", deleteController);




 /// categories 

productsRouter.get("/category/:id", getCategoryByIdController);


export default productsRouter;
