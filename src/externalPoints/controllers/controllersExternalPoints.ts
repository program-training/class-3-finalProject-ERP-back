import { Request, Response } from "express";
import { allProducts } from "../../products/service/productsService";
import { productToUpdate } from "../../configuration/Types";
import { handleError } from "../../utils/handleErrors";
import {
  getProductsByQuery,
  updateInventory,
  getCategories,
  getCategoryById,
  getProductsByCategory,
} from "../service/servicesExternalPoints";

export const getAllProductsC = async (args: any) => {
  const search = args.search
  try {
    if (!search) {
      const allProduct = await allProducts();
      return allProduct
    } else {
      const result = await getProductsByQuery(search);
      return result
    }
  } catch (error) {
    if (error instanceof Error) return error.message
  }
};

export const updateInventoryC = async (req: Request, res: Response) => {
  const product = req.body as productToUpdate[];
  try {
    const data = await updateInventory(product);
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};

export const getCategoriesC = async (req: Request, res: Response) => {
  try {
    const data = await getCategories();
    res.status(200).send(data);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};

export const getCategoryByIdC = async (req: Request, res: Response) => {
  const categoryID = req.params.id;
  try {
    const category = await getCategoryById(categoryID);
    res.status(200).json(category);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};

export const getProductsByCategoryC = async (req: Request, res: Response) => {
  const categoryName = req.params.name;
  try {
    const categoryProducts = await getProductsByCategory(categoryName);
    res.status(200).json(categoryProducts);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};
