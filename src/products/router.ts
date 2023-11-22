import express from "express";
import { updateInventoryController } from "./controllers/productsControllers";
import {
  getProductByIdController,
  allProductsController,
  deleteController,
  NewProductsController,
  editProductController,
  getCategoryByNameController,
} from "./controllers/productsControllers";
const productsRouter = express.Router();

productsRouter.get("/", allProductsController);
productsRouter.get("/:id", getProductByIdController);
productsRouter.get("/?search={searchText}");
productsRouter.get("/g/:id", getProductByIdController);

productsRouter.post("/api/inventory", NewProductsController);
productsRouter.post(
  "/api/shop_inventory/updateInventory",
  updateInventoryController
);

productsRouter.put("/:id", editProductController);

productsRouter.delete("/api/inventory/:id", deleteController);
 /// categories 
productsRouter.get("/category/:name", getCategoryByNameController);


export default productsRouter;
