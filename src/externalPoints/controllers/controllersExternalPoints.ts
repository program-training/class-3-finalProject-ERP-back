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

export const updateInventoryC = async (args:any) => {
  const product = args.up
  try {
    const data = await updateInventory(product);
    return(data);
  } catch (error) {
    if (error instanceof Error) return error.message;
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
