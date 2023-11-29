import express from "express";
import {
  getAllProductsC,
  updateInventoryC,
  getCategoriesC,
  getCategoryByIdC,
  getProductsByCategoryC,
} from "./controllers/controllersExternalPoints";
import { getProductByIdC } from "../products/controllers/productsControllers";

const externalPointsRouter = express.Router();

externalPointsRouter.get("/category/:id", getCategoryByIdC);
externalPointsRouter.get("/categories", getCategoriesC);
externalPointsRouter.get("/categories/:name", getProductsByCategoryC);
externalPointsRouter.get("/", getAllProductsC);
externalPointsRouter.get("/:id", getProductByIdC);
externalPointsRouter.post("/updateInventory", updateInventoryC);

export default externalPointsRouter;
