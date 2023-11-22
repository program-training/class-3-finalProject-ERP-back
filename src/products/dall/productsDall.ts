import { ProductModel } from "../../configuration/userSchema";
import { productUpdate } from "../../configuration/TypeUser";
import { Product } from "../../configuration/TypeUser";


export const getProductFromDB = async (productID: string) => {
  try {
    const product = await ProductModel.findById(productID);
    return product;
  } catch (err) {
    throw err;
  }
};

export const updateDall = async (product: productUpdate) => {
  const data = product;
  try {
    const update = await ProductModel.findByIdAndUpdate(product.productId, {
      quantity: product.requiredQuantity,
    });
    return update;
  } catch (err) {
    throw err;
  }
};

export const getProductDall = async () => {
  try {
    const product = await ProductModel.find({})
    return product
  } catch (err) {
    throw err
  }
};

export const deleteDall = async (id:string) => {
  try {
    const product = await ProductModel.findByIdAndDelete(id)
    return product
  } catch (err) {
    throw err
  }
};

export const newProductsDall = async (product:Product) => {
  const newUser = new ProductModel(product)
  try {
    const newProduct = await newUser.save()
    return newProduct
  } catch (err) {
    throw err
  }
};


export const editProductDall = async (product:Product, id: string) => {
  try {
    const newProduct = await ProductModel.findByIdAndUpdate(id, product , { new: true })
    return newProduct
  } catch (err) {
    throw err
  }
};

/// categories

export const getCategoryDall = async (categoryName) => {
  try {
    const product = await ProductModel.find({})
    return product
  } catch (err) {
    throw err
  }
};