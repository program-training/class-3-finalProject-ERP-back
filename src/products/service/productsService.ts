import { json } from "express";
import { Product, ProductR, graf } from "../../configuration/Types";
import { client } from "../../configuration/redis";
import {
  allProductsR,
  delitePages,
  getProductByIdR,
} from "../../redis/redisFunc";
import {
  getProductByIdDB,
  allProductsDB,
  editProductDB,
  OneProductPageDB,
  deleteProductDB,
  newProductDB,
  dataGrafDB,
} from "../dall/productsDall";

const products = [
  { name: "gilad", nam: 4 },
  { name: "gilad", nam: 4 },
  { name: "gilad", nam: 4 },
  { name: "sinai", nam: 4 },
  { name: "sinai", nam: 4 },
  { name: "sinai", nam: 4 },
];

export const getProductById = async (id: string) => {
  try {
    let product = await getProductByIdR(id);
    if (product) {
      return product;
    } else {
      const product = (await getProductByIdDB(id)) as Product;
      if (!product) throw new Error("no such product in the database");
      await client.json.set(id, ".", product);
      return product;
    }
  } catch (error) {
    throw error
  }
};

export const allProducts = async () => {
  try {
    const allProduct = await allProductsR();
    if (allProduct) {
      return allProduct;
    } else {
      const products = await allProductsDB();
      if (!products) throw new Error("no products in the database");
      await client.json.set("allProductsR", ".", products as any);
      return products;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const dataGraf = async () => {
  try {
    const data = (await dataGrafDB()) as graf[];
    if (!data) throw new Error("no products in the database");
    const newData: any = {};
    for (let obj of data) {
      let product_id = obj.product_id;
      if (newData[product_id]) {
        newData[product_id].quantity =
          newData[product_id].quantity + obj.quantity;
        newData[product_id].time.push({
          time: obj.time,
          quantity: obj.quantity,
        });
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

export const grafUser = async (id: string) => {
  try {
    const data = (await grafUser(id)) as graf[];
    if (!data) throw new Error("no products in the database");
    const newData: any = {};
    for (let obj of data) {
      let product_id = obj.product_id;
      if (newData[product_id]) {
        newData[product_id].quantity =
          newData[product_id].quantity + obj.quantity;
        newData[product_id].time.push({
          time: obj.time,
          quantity: obj.quantity,
        });
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
    delitePages();
    return deleteOne;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const newProduct = async (product: ProductR) => {
  try {
    const newProduct = await newProductDB(product);
    await client.json.set(product._id, ".", product);
    delitePages();
    return newProduct;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const editProductS = async (product: Product, id: string) => {
  try {
    const editProduct = await editProductDB(product, id);
    delitePages();
    return editProduct;
  } catch (error) {
    throw error
  }
};

const l = {
  image: {
    large:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/schoolsupplies/correctiontape_600.png?raw=true",
    medium:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/schoolsupplies/correctiontape_300.png?raw=true",
    small:
      "https://raw.githubusercontent.com/akiva1132/filesServer/master/dist/products/schoolsupplies/correctiontape_150.png?raw=true",
    alt: "Correction Tape Image",
  },
  _id: "6566f616721236a618814efe",
  name: "Correction Tapeגעקר",
  salePrice: 78,
  quantity: 56,
  description: "Description for Correction Tape",
  category: "schoolsuppliesfdhgdf1133",
  discountPercentage: 3,
  __v: 0,
};
