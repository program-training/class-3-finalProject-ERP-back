import { productUpdate } from "../configuration/TypeUser";
import { CategoriesModel, ProductModel } from "../configuration/mongooseSchema";

export const updateDall = async (productUpdate: productUpdate) => {
    
    console.log(productUpdate);
    
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

  export const categoriesFromDall = async () => {
    try {
      const category = await CategoriesModel.find({});
      return category
    } catch (err) {
      throw err
    }
  };

    