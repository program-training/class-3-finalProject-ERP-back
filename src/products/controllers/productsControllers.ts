import { Request, Response } from "express";
import { Product } from "../../configuration/Types";
import { handleError } from "../../utils/handleErrors";
import {
  deleteProduct,
  editProductS,
  getProductById,
  OneProductPage,
  allProducts,
  newProduct,
} from "../service/productsService";

export const allProductsC = async (args:any) => {
  try {
    const allProduct = await allProducts();
    return (allProduct);
  } catch (error) {
    if (error instanceof Error) return error.message;
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

export const newProductC = async (req: Request, res: Response) => {
  try {
    const NewProduct = await newProduct(req.body);
    res.status(201).json(NewProduct);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const editProductC = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = req.body as Product;
  try {
    const editProduct = await editProductS(product, id);
    res.status(200).json(editProduct);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};
