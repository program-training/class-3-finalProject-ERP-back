import { productUpdate } from "../../configuration/Types";
import { CategoriesModel, ProductModel } from "../../configuration/mongooseSchema";

export const updateDB = async (productUpdate: productUpdate) => {
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

export const getProductsByQueryDB = async (searchTerm: string) => {
  try {
    const regex = new RegExp(searchTerm, "i");
    const result = await ProductModel.find({
      $or: [{ name: regex }, { description: regex }, { category: regex }],
    });
    if (!result || result.length === 0) {
      throw new Error("not found results");
    }
    return result;
  } catch (error) {
    return error;
  }
};

export const getCategoryByIdDB = async (categoryID: string) => {
  try {
    const category = await CategoriesModel.findById(categoryID);
    return category;
  } catch (err) {
    return err;
  }
};

export const getCategoriesDB = async () => {
  try {
    const category = await CategoriesModel.find({});
    return category;
  } catch (err) {
    return err;
  }
};

export const getProductsByCategoryDB = async (categoryName: string) => {
  try {
    const categoryProducts = await ProductModel.find({
      category: categoryName,
    });
    return categoryProducts;
  } catch (err) {
    return err;
  }
};
