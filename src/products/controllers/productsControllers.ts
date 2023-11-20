import { Request, Response } from 'express';
import { getProductById } from '../service/productsService';
export const getProductByIdController = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const product = await getProductById(id);
      res.status(200).json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };