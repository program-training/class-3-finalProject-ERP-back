import { Product, graf } from "../../configuration/Types";
import {
  getProductByIdDB,
  allProductsDB,
  editProductDB,
  OneProductPageDB,
  deleteProductDB,
  newProductDB,
  dataGrafDB,
} from "../dall/productsDall";
const arr = [
  { name: "gilad", nam: 4 },
  { name: "gilad", nam: 4 },
  { name: "gilad", nam: 4 },
  { name: "sinai", nam: 4 },
  { name: "sinai", nam: 4 },
  { name: "sinai", nam: 4 },
];

export const getProductById = async (id: string) => {
  try {
    const product = await getProductByIdDB(id);
    if (!product) throw new Error("no such product in the database");
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const allProducts = async () => {
  try {
    const products = await allProductsDB();
    if (!products) throw new Error("no products in the database");
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const dataGraf = async () => {
  console.log("gilad");
  try {
    const data = (await dataGrafDB()) as graf[];
    if (!data) throw new Error("no products in the database");
    const newData: any = {};
    for (let obj of data) {
      let product_id = obj.product_id;
      if (newData[product_id]) {
        newData[product_id].quantity =
          newData[product_id].quantity + obj.quantity;
        newData[product_id].time.push({ time: obj.time, quantity: obj.quantity });
      } else {
        newData[product_id] = {
          product_name: obj.product_name,
          quantity: obj.quantity,
          time: [{ time: obj.time, quantity: obj.quantity }],
        };
      }
    }
    return newData;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const OneProductPage = async (page: number) => {
  const ProductPlacement = page * 12;
  try {
    const product = (await OneProductPageDB(ProductPlacement)) as Product[];
    if (product?.length === 0) {
      throw new Error("no mor product in the database");
    }
    return product;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const deleteOne = await deleteProductDB(id);
    if (!deleteOne) throw new Error("no such product in the database");
    return deleteOne;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const newProduct = async (product: Product) => {
  try {
    const newProduct = await newProductDB(product);
    return newProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editProductS = async (product: Product, id: string) => {
  try {
    const editProduct = await editProductDB(product, id);
    return editProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};
