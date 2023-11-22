import express from "express";
import { getAllProducts, updateInventoryController } from "../controllers/controllers";
import { getProductByIdController } from "../../products/controllers/productsControllers";

const externalPointsRouter = express.Router();



externalPointsRouter.get("/", getAllProducts);
externalPointsRouter.get("/:id", getProductByIdController);
externalPointsRouter.post("/updateInventory",updateInventoryController);


export default externalPointsRouter;
