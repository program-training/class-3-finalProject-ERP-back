import { Request, Response } from "express";
import { getProduct, getProductById } from "../../products/service/productsService";
import { getProductByQuery, updateInventoryServices } from "../services/servicesExternalPoints";
import { productUpdate } from "../../configuration/TypeUser";



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
      res.status(500).send({ error: error.message });
    }
  };






  export const updateInventoryController = async (
    req: Request,
    res: Response
  ) => {
    const product = req.body as productUpdate;
    try {
      const data = await updateInventoryServices(product);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
  