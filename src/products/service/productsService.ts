import { getProductFromDB, getProductDall } from "../dall/productsDall";
import { productUpdate } from "../../configuration/TypeUser";
import { updateDall, deleteDall, newProductsDall , editProductDall, getCategoryDall} from "../dall/productsDall";
import { Product } from "../../configuration/TypeUser";

export const getProductById = async (id: string) => {
  try {
    const product = await getProductFromDB(id);
    if (!product) throw new Error("no such product in the database");
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

export const getProduct = async () => {
  try {
    const product = await getProductDall();
    if (!product) throw new Error("no  product in the database");
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteServices = async (id: string) => {
  try {
    const deleteOne = await deleteDall(id);
    if (!deleteOne) throw new Error("no such product in the database");
    return deleteOne;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const newProductsServices = async (product: Product) => {
  try {
    const newProduct = await newProductsDall(product);
    return newProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editProductService = async (product: Product, id:string) => {
  try {
    const newProduct = await editProductDall(product, id);
    if (!product) throw new Error("no  product in the database");
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

/// categories

export const getCategoryByName = async (categoryName: string) => {
  try {
    const category = await getCategoryDall(categoryName);
    if (!category) throw new Error("no  category in the database");
    return category;
  } catch (error) {
    return Promise.reject(error);
  }
};