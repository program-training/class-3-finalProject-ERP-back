import express from "express";

const productsRouter = express.Router();

productsRouter.get("/api/inventory", );
productsRouter.get("/api/inventory/:id", );
productsRouter.get("/api/shop_inventory?search={searchText}", );
productsRouter.get(" /api/shop_inventory/:id", );


productsRouter.post("/api/inventory", );
productsRouter.post("/api/shop_inventory/updateInventory", );


productsRouter.put("/api/inventory/:id", );

productsRouter.delete("/api/inventory/:id", );


export default productsRouter;
