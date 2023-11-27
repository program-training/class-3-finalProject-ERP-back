import { getByQuery, getProductFromDB } from "../../products/dall/productsDall";
import { updateDall, getCategoryDall, categoriesFromDall } from "../dall";
import { ordersErrors, productToUpdate } from "../../configuration/TypeUser";

export const updateInventoryServices2 = async (products: productToUpdate[]) => {
  try {
    const updates: productToUpdate[] = [];
    const toUpdates: ordersErrors[] = [];
    for (const product of products) {
      const dataProduct = await getProductFromDB(product.productId);
      if (!dataProduct) {
        toUpdates.push({
          error: `No such product in the database: ${product.productId}`,
        });
        continue;
      }
      const quantity = dataProduct.quantity - product.requiredQuantity;
      if (quantity < 0) {
        toUpdates.push({
          error: `Not enough in stock for product ${product.productId} in stock: ${dataProduct.quantity}`,
        });
      }
    }
    if (toUpdates.length === 0) {
      for (const product of products) {
        const dataProduct = await getProductFromDB(product.productId);
        if (dataProduct) {
          product.requiredQuantity =
            dataProduct.quantity - product.requiredQuantity;
          const update = await updateDall(product);
          if (update) updates.push(product);
        }
      }
    }
    return updates
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

export const updateInventoryServices = async (product: productToUpdate) => {
  try {
    if (!product.productId) {
      return;
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
