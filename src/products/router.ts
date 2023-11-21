import express from "express";
import { updateInventoryController } from "./controllers/productsControllers";
import {
  getProductByIdController,
  allProductsController,
  deleteController,
  NewProductsController,
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

productsRouter.put("/api/inventory/:id",);

productsRouter.delete("/api/inventory/:id",);

productsRouter.delete("/api/inventory/:id", deleteController);

export default productsRouter;
