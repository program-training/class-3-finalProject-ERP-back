import express from "express";
const productsRouter = express.Router();
import {
    allProducts
} from "./controllers/productsControllers";
// productsRouter.get("/", allProducts);
productsRouter.get("/:id",);
productsRouter.get("/", allProducts);
productsRouter.post("/api/inventory",);
productsRouter.post("/api/shop_inventory/updateInventory",);


productsRouter.put("/api/inventory/:id",);

productsRouter.delete("/api/inventory/:id",);


export default productsRouter;
