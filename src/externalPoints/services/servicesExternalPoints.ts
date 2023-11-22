import { productUpdate } from "../../configuration/TypeUser";
import { getByQuery, getProductFromDB } from "../../products/dall/productsDall";
import { updateDall } from "../dall";

export const getProductByQuery = async (search:string) => {
    try {
      const product = await getByQuery(search);
      return product;
    } catch (error) {
      return Promise.reject(error);
    }
  };


  export const updateInventoryServices = async (product: productUpdate) => {
    const data = product;
    try {
      const dataProduct = await getProductFromDB(data.productId);
      if (!dataProduct) throw new Error("no such product in the database");
      const requiredQuantity = dataProduct.quantity - data.requiredQuantity;
      if (requiredQuantity < 0) throw new Error("not enough in stock");
      const productUpdate = {
        productId: data.productId,
        requiredQuantity: requiredQuantity,
      };
      const update = await updateDall(productUpdate);
      return update;
    } catch (error) {
      return Promise.reject(error);
    }
  };