import { ProductModel } from "../../configuration/mongooseSchema";
import { Product } from "../../configuration/Types";

export const getProductByIdDB = async (productID: string) => {
  try {
    const product = await ProductModel.findById(productID);
    return product;
  } catch (error) {
    return error;
  }
};

export const allProductsDB = async () => {
  try {
    const products = await ProductModel.find({});
    return products;
  } catch (err) {
    return err;
  }
};

export const OneProductPageDB = async (ProductPlacement: number) => {
  try {
    const products = await ProductModel.find({})
      .skip(ProductPlacement)
      .limit(12);
    return products;
  } catch (error) {
    return error;
  }
};

export const deleteProductDB = async (id: string) => {
  try {
    const product = await ProductModel.findByIdAndDelete(id);
    return product;
  } catch (error) {
    return error;
  }
};

export const newProductDB = async (product: Product) => {
  const newProduct = new ProductModel(product);
  try {
    const product = await newProduct.save();
    return product;
  } catch (error) {
    return error;
  }
};

export const editProductDB = async (product: Product, id: string) => {
  try {
    const editProduct = await ProductModel.findByIdAndUpdate(id, product);
    return editProduct;
  } catch {
    throw new Error("no such product in the database");
  }
};
