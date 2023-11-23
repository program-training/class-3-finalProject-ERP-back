import { Request, Response } from "express";
import { getProduct, getProductById } from "../../products/service/productsService";
import { getProductByQuery, updateInventoryServices, categoriesFromDB } from "../services/servicesExternalPoints";
import { productToUpdate } from "../../configuration/TypeUser";



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
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};






export const updateInventoryController = async (
  req: Request,
  res: Response
) => {
  const product = req.body as productToUpdate;
  console.log(product);
  
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
console.log("dsfsdf");

    const data = await categoriesFromDB();
    res.status(200).send(data)
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
