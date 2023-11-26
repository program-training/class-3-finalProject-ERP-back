import { getByQuery, getProductFromDB, categories } from "../../products/dall/productsDall";
import { updateDall, getCategoryDall } from "../dall";
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
      if (!product.productId){
        return
      }
      const dataProduct = await getProductFromDB(product.productId);
      if (!dataProduct) throw new Error("no such product in the database");
      const quantity = dataProduct.quantity - product.requiredQuantity;
      if (quantity < 0) throw new Error("not enough in stock");
      const productUpdate = {
        productId: product.productId,
        requiredQuantity: quantity,
      };
      const update = await updateDall(productUpdate);
      return update;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  export const getCategoryById = async (categoryID: string) => {
    try {
      const category = await getCategoryDall(categoryID);
      if (!category) throw new Error("no  category in the database");
      return category;
    } catch (error) {
      return Promise.reject(error);
    }
  };