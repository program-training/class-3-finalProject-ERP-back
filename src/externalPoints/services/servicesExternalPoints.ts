import { getByQuery, getProductFromDB } from "../../products/dall/productsDall";
import {
  updateDall,
  getCategoryDall,
  categoriesFromDall,
  getProductsByCategoryDall,
} from "../dall";
import {
  Product,
  ordersErrors,
  productToUpdate,
} from "../../configuration/Type";

export const updateInventoryServices = async (products: productToUpdate[]) => {
  try {
    const updates: productToUpdate[] = [];
    const toUpdates: ordersErrors[] = [];
    for (const product of products) {
      const dataProduct = (await getProductFromDB(
        product.productId
      )) as Product;
      if (!dataProduct.quantity) {
        toUpdates.push({
          error: `No such product in the database: ${product.productId}`,
        });
      } else if (dataProduct) {
        const quantity = dataProduct.quantity - product.requiredQuantity;
        if (quantity < 0) {
          toUpdates.push({
            error: `Not enough in stock for product ${product.productId}! in stock: ${dataProduct.quantity}`,
          });
        }
      }
    }

    if (toUpdates.length === 0) {
      for (const product of products) {
        const dataProduct = (await getProductFromDB(
          product.productId
        )) as Product;
        if (dataProduct) {
          const newQuantity = dataProduct.quantity - product.requiredQuantity;
          product.requiredQuantity = newQuantity;
          const update = await updateDall(product);
          if (update) updates.push(product);
        }
      }
      return updates;
    }
    return toUpdates;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByQuery = async (search: string) => {
  try {
    const product = await getByQuery(search);
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const categoriesFromDB = async () => {
  try {
    const categories = await categoriesFromDall();
    return categories;
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

export const getProductsByCategoryService = async (categoryName: string) => {
  try {
    const category = await getProductsByCategoryDall(categoryName);
    if (!category) throw new Error("no  category in the database");
    return category;
  } catch (error) {
    return Promise.reject(error);
  }
};
