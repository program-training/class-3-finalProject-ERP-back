import express from "express";


const productsRouter = express.Router();

productsRouter.get("/inventory", );
productsRouter.get("/inventory/:id", );
productsRouter.get("/all/:id", );
productsRouter.get("/product/:id", );
productsRouter.get("/top5/:type", );

export default productsRouter;
