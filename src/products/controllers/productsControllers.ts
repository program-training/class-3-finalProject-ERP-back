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

export const allProductsC = async (req: Request, res: Response) => {
  try {
    const allProduct = await allProducts();
    res.status(200).json(allProduct);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const getProductByIdC = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const OneProductPageC = async (req: Request, res: Response) => {
  const page = Number(req.params.page);
  try {
    const Products = await OneProductPage(page);
    res.status(200).json(Products);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const deleteProductC = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteOne = await deleteProduct(id);
    res.status(204).json(deleteOne);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
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
