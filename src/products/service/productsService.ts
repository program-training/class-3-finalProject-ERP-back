import { getProductFromDB, getProductsDall, editProductDall, getCategoryDall } from "../dall/productsDall";
import { productUpdate } from "../../configuration/TypeUser";
import { deleteDall, newProductsDall } from "../dall/productsDall";
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



export const getProductsService = async () => {
  try {
    const product = await getProductsDall();
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

export const getCategoryById = async (categoryID: string) => {
  try {
    const category = await getCategoryDall(categoryID);
    if (!category) throw new Error("no  category in the database");
    return category;
  } catch (error) {
    return Promise.reject(error);
  }
};