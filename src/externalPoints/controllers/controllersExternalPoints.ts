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

export const getAllProductsC = async (req: Request, res: Response) => {
  const search = req.query.search as string;
  try {
    if (!search) {
      const allProduct = await allProducts();
      res.status(200).send(allProduct);
    } else {
      const result = await getProductsByQuery(search);
      res.status(200).send(result);
    }
  } catch (error) {
    if (error instanceof Error) return handleError(res, error);
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

export const getCategoriesC = async () => {
  try {
    const data = await getCategories();
    return data;
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const getCategoryByIdC = async (args: { id: string }) => {
  try {
    const category = await getCategoryById(args.id);
    return category;
  } catch (error) {
    if (error instanceof Error) return error.message;
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
