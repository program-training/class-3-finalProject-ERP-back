import express from "express";
import { getAllProducts, updateInventoryController, getCategories } from "../controllers/controllersExternalPoints";
import { getProductByIdController } from "../../products/controllers/productsControllers";

const externalPointsRouter = express.Router();


externalPointsRouter.get("/categories",getCategories);
externalPointsRouter.get("/", getAllProducts);
externalPointsRouter.get("/:id", getProductByIdController);
externalPointsRouter.post("/updateInventory",updateInventoryController);



export default externalPointsRouter;
