import { productUpdate } from "../configuration/TypeUser";
import { CategoriesModel, ProductModel } from "../configuration/userSchema";

export const updateDall = async (productUpdate: productUpdate) => {
    try {
      const update = await ProductModel.findByIdAndUpdate(productUpdate.productId, {
        quantity: productUpdate.requiredQuantity,
      });
      return update;
    } catch (err) {
      throw err;
    }
  };

  export const getCategoryDall = async (categoryID: string) => {
    try {
      const category = await CategoriesModel.findById(categoryID)
      return category
    } catch (err) {
      throw err
    }
  };