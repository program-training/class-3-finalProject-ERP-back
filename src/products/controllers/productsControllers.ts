import { Request, Response } from "express";
import {
  deleteServices,
  editProductService,
  getCategoryById,
  getProductById,
} from "../service/productsService";
import { Product, productUpdate } from "../../configuration/TypeUser";
import { getProduct } from "../service/productsService";
import { newProductsServices } from "../service/productsService";




export const getProductByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await getProductById(id);
    res.status(200).json(product);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const allProductsController = async (req: Request, res: Response) => {
  try {
    const allProducts = await getProduct();
    res.status(200).json(allProducts);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteController = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteOne = await deleteServices(id);
    res.status(200).json(deleteOne);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const NewProductsController = async (req: Request, res: Response) => {
  try {
    const newProduct = await newProductsServices(req.body);
    res.status(200).json(newProduct);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const editProductController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = req.body as Product;
  try {
    const newProduct = await editProductService(product,id)
    res.status(200).json(newProduct);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

/// categories

export const getCategoryByIdController = async (req: Request, res: Response) => {
  const categoryID = req.params.id;
  try {
    const category = await getCategoryById(categoryID);
    res.status(200).json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};