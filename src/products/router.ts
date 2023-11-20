import express from "express";
import { rrrrrrrr } from "./controllers/productsControllers";
const productsRouter = express.Router();

productsRouter.get("/", rrrrrrrr);
productsRouter.get("/:id", );
productsRouter.get("/?search={searchText}", );
productsRouter.get(" /:id", );


productsRouter.post("/api/inventory", );
productsRouter.post("/api/shop_inventory/updateInventory", );


productsRouter.put("/api/inventory/:id", );

productsRouter.delete("/api/inventory/:id", );


export default productsRouter;
