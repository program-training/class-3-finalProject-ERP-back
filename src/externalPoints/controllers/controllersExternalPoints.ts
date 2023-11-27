import { Request, Response } from "express";
import { getProduct, getProductById } from "../../products/service/productsService";
import { getProductByQuery, updateInventoryServices, categoriesFromDB, getCategoryById } from "../services/servicesExternalPoints";
import { productToUpdate } from "../../configuration/TypeUser";
import { handleError } from "../../utils/handleErrors";


export const getAllProducts = async (req: Request, res: Response) => {
  const search = req.query.search as string
  try {
    if (!search) {
      const allProducts = await getProduct();
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
  const product = req.body as productToUpdate;
  try {
    const data = await updateInventoryServices(product);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const getCategories = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await categoriesFromDB();
    res.status(200).send(data)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getCategoryByIdController = async (req: Request, res: Response) => {
  const categoryID = req.params.id;
  try {
    const category = await getCategoryById(categoryID);
    res.status(200).json(category);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};