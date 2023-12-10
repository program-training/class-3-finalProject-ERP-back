import mongoose from "mongoose";
import { ProductModel, grafModel } from "../../configuration/mongooseSchema";
import { Product } from "../../configuration/Types";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

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

export const dataGrafDB = async () => { 
  try {
    const data1 = await grafModel.find({})
    const products = data1;
    return products;
  } catch (err) {
    return err;
  }
};



export const OneProductPageDB = async (ProductPlacement: number) => {
  try {
    const products = await ProductModel.find({}).sort({price: 1})
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
