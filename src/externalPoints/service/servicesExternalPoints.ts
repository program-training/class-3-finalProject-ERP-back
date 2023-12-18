import { getProductByIdDB } from "../../products/dall/productsDall";
import {
  updateDB,
  getCategoryByIdDB,
  getCategoriesDB,
  getProductsByCategoryDB,
  getProductsByQueryDB,
} from "../dall/dallExternalPoints";
import {
  Product,
  ordersErrors,
  productToUpdate,
} from "../../configuration/Types";
import {
  delitePages,
  getCategoriesR,
  getCategoryByIdR,
} from "../../redis/redisFunc";
import { client } from "../../configuration/redis";

export const updateInventory = async (products: productToUpdate[]) => {
  try {
    const updates: productToUpdate[] = [];
    const toUpdates: ordersErrors[] = [];
    for (const product of products) {
      const dataProduct = (await getProductByIdDB(
        product.productId
      )) as Product;
      if (!dataProduct) {
        toUpdates.push({
          error: `No such product in the database: ${product.productId}`,
        });
      }
      const quantity = dataProduct.quantity - product.requiredQuantity;
      if (quantity < 0) {
        toUpdates.push({
          error: `Not enough in stock for product ${product.productId}! in stock: ${dataProduct.quantity}`,
        });
      }
    }

    if (toUpdates.length === 0) {
      for (const product of products) {
        const dataProduct = (await getProductByIdDB(
          product.productId
        )) as Product;
        if (dataProduct) {
          const newQuantity = dataProduct.quantity - product.requiredQuantity;
          product.requiredQuantity = newQuantity;
          const update = await updateDB(product);
          if (update) updates.push(product);
        }
      }
      delitePages();
      return updates;
    }
    return toUpdates;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductsByQuery = async (search: string) => {
  try {
    const product = await getProductsByQueryDB(search);
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCategories = async () => {
  try {
    const categories = await getCategoriesR();
    if (categories) {
      return categories;
    } else {
      const categories = await getCategoriesDB();
      await client.json.set(`getCategoriesR`, ".", categories as any);
      return categories;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCategoryById = async (categoryID: string) => {
  try {
    const category = await getCategoryByIdR(categoryID);
    if (category) {
      return category;
    } else {
      const category = await getCategoryByIdDB(categoryID);
      if (!category) throw new Error("no  category in the database");
      await client.json.set(`getCategor_${categoryID}`, ".", category as any);
      return category;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductsByCategory = async (categoryName: string) => {
  try {
    const category = await getProductsByCategoryDB(categoryName);
    if (!category) throw new Error("no  category in the database");
    return category;
  } catch (error) {
    return Promise.reject(error);
  }
};
