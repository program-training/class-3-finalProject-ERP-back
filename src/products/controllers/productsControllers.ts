// import { Request, Response } from "express";
// import { Product } from "../../configuration/Types";
// import { handleError } from "../../utils/handleErrors";
import {
  deleteProduct,
  editProductS,
  getProductById,
  OneProductPage,
  allProducts,
  newProduct,
  dataGraf,
  grafUser,
} from "../service/productsService";

export const allProductsC = async (args:any) => {
  try {
    const allProduct = await allProducts();
    return (allProduct);
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};
export const dataGrafC = async (req: Request, res: Response) => {
  try {
    const data = await dataGraf();
    console.log("sinai")
    console.log(data)
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const dataGrafC = async (args:any) => {
  try {
    const data = await dataGraf();
    return data
  } catch (error) {
    if (error instanceof Error) return  error.message;
  }
};

export const grafUserC = async (args:any) => {
  const id = args.id
  try {
    const data = await grafUser(id);
    return data
  } catch (error) {
    if (error instanceof Error) return  error.message;
  }
};

export const getProductByIdC = async (args:any) => {
  const id = args.id;
  try {
    const product = await getProductById(id);
    return(product);
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const OneProductPageC = async (args:any) => {
  const page = args.page;
  try {
    const Products = await OneProductPage(page);
    return(Products);
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const deleteProductC = async (args:any) => {
  const id = args.id;
  try {
    const deleteOne = await deleteProduct(id);
   return(deleteOne);
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const newProductC = async (args: any) => {
  try {
    const { productInput } = args
    const NewProduct = await newProduct(productInput);
    return NewProduct
  } catch (error) {
    if (error instanceof Error) return error.message
  }
};

export const editProductC = async (args: any) => {
  const { productInput } = args
  const id = productInput._id
  const product = productInput
  try {
    const editProduct = await editProductS(product, id);
    console.log();
    
    return editProduct
  } catch (error) {
    if (error instanceof Error)console.log(error.message);
    
    if (error instanceof Error) return error.message
  }
};
