import { Request, Response } from "express";
import { Product } from "../../configuration/Types";
import { handleError } from "../../utils/handleErrors";
import {
  deleteProduct,
  editProductS,
  getProductById,
  OneProductPage,
  allProducts,
  newProduct,
} from "../service/productsService";

export const allProductsC = async () => {
  try {
    const allProduct = await allProducts();
    return allProduct;
  } catch (error) {
    if (error instanceof Error) return ;
  }
};

export const getProductByIdC = async (perent: any, args: any) => {
  const id = args.id;
  try {
    const product = await getProductById(id);
    return product;
  } catch (error) {
    if (error instanceof Error) return;
  }
};

export const OneProductPageC = async (perent: any, args: any) => {
  const page = args.page;
  try {
    const Products = await OneProductPage(page);
    return Products ;
  } catch (error) {
    if (error instanceof Error) return handleError(perent, error, 500);
  }
};

export const deleteProductC = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteOne = await deleteProduct(id);
    res.status(204).json(deleteOne);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};

export const newProductC = async (perent: any, args: any) => {
  try {
    const NewProduct = await newProduct(args.body);
    return NewProduct
  } catch (error) {
    if (error instanceof Error) return handleError(perent, error, 500);
  }
};

export const editProductC = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = req.body as Product;
  try {
    const editProduct = await editProductS(product, id);
    res.status(200).json(editProduct);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};
