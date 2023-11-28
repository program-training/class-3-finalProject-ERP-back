import { Request, Response } from "express";
import { getProductsService, getProductById } from "../../products/service/productsService";
import { getProductByQuery, updateInventoryServices, categoriesFromDB, getCategoryById, getProductsByCategoryService } from "../services/servicesExternalPoints";
import { productToUpdate } from "../../configuration/Type";
import { handleError } from "../../utils/handleErrors";


export const getAllProducts = async (req: Request, res: Response) => {
  console.log("giladf sinai")
  const search = req.query.search as string
  try {
    if (!search) {
      const allProducts = await getProductsService();
      res.status(200).send(allProducts);
    }
    else {
      const result = await getProductByQuery(search)
      res.status(200).send(result)
    }
  } catch (error) {
    if (error instanceof Error) return handleError(res, error);
  }
};




export const updateInventoryController = async (
  req: Request,
  res: Response
) => {
  const product = req.body as productToUpdate[];
  try {
    const data = await updateInventoryServices(product);
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};


export const getCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await categoriesFromDB();
    res.status(200).send(data)
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};

export const getCategoryByIdController = async (req: Request, res: Response) => {
  const categoryID = req.params.id;
  try {
    const category = await getCategoryById(categoryID);
    res.status(200).json(category);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};

export const getProductsByCategoryController = async (req: Request, res: Response) => {
  const categoryName = req.params.name;
  try {
    const categoryProducts = await getProductsByCategoryService(categoryName);
    res.status(200).json(categoryProducts);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};