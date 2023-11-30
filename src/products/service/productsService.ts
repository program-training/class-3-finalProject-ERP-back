import { Product } from "../../configuration/Types";
import {
  getProductByIdDB,
  allProductsDB,
  editProductDB,
  OneProductPageDB,
  deleteProductDB,
  newProductDB,
} from "../dall/productsDall";

export const getProductById = async (id: string) => {
  try {
    const product = await getProductByIdDB(id);
    if (!product) throw new Error("no such product in the database");
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const allProducts = async () => {
  try {
    const products = await allProductsDB();
    if (!products) throw new Error("no products in the database");
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const OneProductPage = async (page: number) => {
  const ProductPlacement = page * 12;
  try {
    const productד = (await OneProductPageDB(ProductPlacement)) as Product[];
    if (productד?.length === 0) {
      throw new Error("no mor product in the database");
    }
    return productד;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const deleteOne = await deleteProductDB(id);
    if (!deleteOne) throw new Error("no such product in the database");
    return deleteOne;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const newProduct = async (product: Product) => {
  try {
    const newProduct = await newProductDB(product);
    return newProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editProductS = async (product: Product, id: string) => {
  try {
    const editProduct = await editProductDB(product, id);
    return editProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};
