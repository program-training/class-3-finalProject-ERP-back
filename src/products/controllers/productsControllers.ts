// import { Request, Response } from "express";
// import { Product } from "../../configuration/Types";
// import { handleError } from "../../utils/handleErrors";
import { object } from "yup";
import {
  deleteProduct,
  editProductS,
  getProductById,
  OneProductPage,
  allProducts,
  newProduct,
  dataGraf,
} from "../service/productsService";

export const allProductsC = async () => {
  try {
    const allProduct = await allProducts();
    return allProduct;
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const dataGrafC = async () => {
  try {
    const data = await dataGraf();    
    // const result = Object.entries(data).map(([key, value]) => ({ [key]: value }));
    const arrayWithoutKeys = Object.values(data) as any
    return arrayWithoutKeys
  } catch (error) {
    if (error instanceof Error) return  error.message;
  }
};

export const grafUserC = async () => {
  return null
};

export const getProductByIdC = async (_:any, args:any) => {
  const {id} = args
  try {
    const product = await getProductById(id);
    return(product);
  } catch (error) {
    throw error
  }
};

export const OneProductPageC = async (_:any, args:any) => {
  const page = args.page;
  try {
    const Products = await OneProductPage(page);
    return(Products);
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const deleteProductC = async (_:any, args:any) => {
  const id = args.id;
  try {
    const deleteOne = await deleteProduct(id);
   return(deleteOne);
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const newProductC = async (_:any,args: any) => {
  try {
    const { productInput } = args
    const NewProduct = await newProduct(productInput);
    return NewProduct
  } catch (error) {
    if (error instanceof Error) return error.message
  }
};

export const editProductC = async (args: any) => {
  const id = args._id
  const product = args
  try {
    const editProduct = await editProductS(product, id);
    return editProduct
  } catch (error) {
    throw error
  }
};
