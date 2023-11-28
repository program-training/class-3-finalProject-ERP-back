import express from "express";
import { getAllProducts, updateInventoryController, getCategories, getCategoryByIdController, getProductsByCategoryController } from "../controllers/controllersExternalPoints";
import { getProductByIdController } from "../../products/controllers/productsControllers";

const externalPointsRouter = express.Router();

externalPointsRouter.get("/category/:id", getCategoryByIdController);
externalPointsRouter.get("/categories",getCategories);
externalPointsRouter.get("/categories/:name",getProductsByCategoryController);
externalPointsRouter.get("/", getAllProducts);
externalPointsRouter.get("/:id", getProductByIdController);
externalPointsRouter.post("/updateInventory",updateInventoryController);
                                             


export default externalPointsRouter;
