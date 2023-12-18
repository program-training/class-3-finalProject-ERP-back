// import { Request, Response } from "express";
// import { Product } from "../../configuration/Types";
// import { handleError } from "../../utils/handleErrors";
import { client } from "../../configuration/redis";
import { OneProductPageR, dataGrafR } from "../../redis/redisFunc";
import {
  deleteProduct,
  editProductS,
  getProductById,
  OneProductPage,
  allProducts,
  newProduct,
  dataGraf,
} from "../service/productsService";

export const allProductsC = async (args: any) => {
  try {
    const allProduct = await allProducts();
    return allProduct;
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const dataGrafC = async () => {
  try {
    const data = await dataGrafR();
    console.log(data);

    if (data) {
      return data;
    } else {
      const data = await dataGraf();
      const arrayWithoutKeys = Object.values(data) as any;
      await client.json.set("dataGrafR", ".", arrayWithoutKeys);
      return arrayWithoutKeys;
    }
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const grafUserC = async (args: any) => {
  return null;
};

export const getProductByIdC = async (args: any) => {
  const id = args.id;
  try {
    const product = await getProductById(id);
    return product;
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const OneProductPageC = async (args: any) => {
  const page = args.page;
  try {
    const product = await OneProductPageR(args.page);
    if (product) {
      return product;
    } else {
      const Products = await OneProductPage(page);
      await client.json.set(`page_${page}`, ".", Products);
      return Products;
    }
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const deleteProductC = async (args: any) => {
  const id = args.id;
  try {
    const deleteOne = await deleteProduct(id);
    return deleteOne;
  } catch (error) {
    throw error
  }
};

export const newProductC = async (args: any) => {
  try {
    const { productInput } = args;
    const NewProduct = await newProduct(productInput);
    return NewProduct;
  } catch (error) {
    if (error instanceof Error) return error.message
  }
};

export const editProductC = async (args: any) => {
  const { productInput } = args;
  const id = productInput._id;
  const product = productInput;
  try {
    const editProduct = await editProductS(product, id);
    return editProduct;
  } catch (error) {
    if (error instanceof Error)console.log(error.message);
    
    if (error instanceof Error) return error.message
  }
};
