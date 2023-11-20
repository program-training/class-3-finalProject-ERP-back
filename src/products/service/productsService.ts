import { getProductFromDB } from "../dall/productsDall";
export const getProductById = async (id: string) => {
    try {
      const product = await getProductFromDB(id);
      if (!product) throw new Error("no such product in the database");
      return product;
    } catch (error) {
      return Promise.reject(error);
    }
  };