import express from "express";
import {
  allProductsC,
  deleteProductC,
  getProductByIdC,
  newProductC,
  editProductC,
  OneProductPageC,
} from "./controllers/productsControllers";

const products = express.Router();

products.get("/", allProductsC);
products.get("/products/:page", OneProductPageC);
products.get("/:id", getProductByIdC);
products.post("/", newProductC);
products.put("/:id", editProductC);
products.delete("/:id", deleteProductC);

export default products;
