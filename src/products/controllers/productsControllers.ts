import { Request, Response } from "express";
import {
  deleteServices,
  editProductService,
  getProductById,
  tenProductsService,
} from "../service/productsService";
import { Product, productUpdate } from "../../configuration/Type";
import { getProductsService } from "../service/productsService";
import { newProductsServices } from "../service/productsService";
import { handleError } from "../../utils/handleErrors";

export const getProductByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const allProductsController = async (req: Request, res: Response) => {
  try {
    const allProducts = await getProductsService();
    res.status(200).json(allProducts);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const tenProductsController = async (req: Request, res: Response) => {
  const page = Number(req.params.page);
  try {
    const allProducts = await tenProductsService(page);
    res.status(200).json(allProducts);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const deleteProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteOne = await deleteServices(id);
    res.status(204).json(deleteOne);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const newProductsController = async (req: Request, res: Response) => {
  try {
    const newProduct = await newProductsServices(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const editProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = req.body as Product;
  try {
    const newProduct = await editProductService(product, id);
    res.status(200).json(newProduct);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};


