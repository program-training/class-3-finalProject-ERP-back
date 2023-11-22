import express from "express";
import {
  allProductsController,
  deleteController,
  getProductByIdController,
  NewProductsController,
  editProductController,
  getCategoryByIdController,
} from "./controllers/productsControllers";
import { validateProductUpdate } from "../users/midelweres/updateValidation";
const productsRouter = express.Router();

productsRouter.get("/", allProductsController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.post("/", NewProductsController);
productsRouter.put("/:id", validateProductUpdate, editProductController);
productsRouter.delete("/:id", deleteController);




 /// categories 

productsRouter.get("/category/:id", getCategoryByIdController);


export default productsRouter;
