import mongoose, { Schema, model } from "mongoose";
import { productUpdate } from "../configuration/Type";
import { CategoriesModel, ProductModel } from "../configuration/mongooseSchema";

export const updateDall = async (productUpdate: productUpdate) => {
  try {
    const update = await ProductModel.findByIdAndUpdate(
      productUpdate.productId,
      {
        quantity: productUpdate.requiredQuantity,
      }
    );
    return update;
  } catch (err) {
    return err;
  }
};

export const getCategoryDall = async (categoryID: string) => {
  try {
    const category = await CategoriesModel.findById(categoryID);
    return category;
  } catch (err) {
    return err;
  }
};

export const categoriesFromDall = async () => {
  try {
    const category = await CategoriesModel.find({});
    return category;
  } catch (err) {
    return err;
  }
};

export const getProductsByCategoryDall = async (categoryName: string) => {
  try {
    const categoryProducts = await ProductModel.find({
      category: categoryName,
    });
    return categoryProducts;
  } catch (err) {
    return err;
  }
};
