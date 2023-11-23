import { getByQuery, getProductFromDB, categories } from "../../products/dall/productsDall";
import { updateDall } from "../dall";
import {  productToUpdate } from "../../configuration/TypeUser";
export const getProductByQuery = async (search:string) => {
    try {
      const product = await getByQuery(search);
      return product;
    } catch (error) {
      return Promise.reject(error);
    }
  };


  export const categoriesFromDB = async () => {
    try {
      const product = await categories();
      return product;
    } catch (error) {
      return Promise.reject(error);
    }
  };


  export const updateInventoryServices = async (product:productToUpdate) => {
    try {
      if (!product._id){
        return
      }
      const dataProduct = await getProductFromDB(product._id);
      if (!dataProduct) throw new Error("no such product in the database");
      const requiredQuantity = dataProduct.quantity - product.quantity;
      if (requiredQuantity < 0) throw new Error("not enough in stock");
      const productUpdate = {
        productId: product._id,
        requiredQuantity: requiredQuantity,
      };
      const update = await updateDall(productUpdate);
      return update;
    } catch (error) {
      return Promise.reject(error);
    }
  };