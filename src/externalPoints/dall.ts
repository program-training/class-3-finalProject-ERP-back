import { productUpdate } from "../configuration/TypeUser";
import { ProductModel } from "../configuration/userSchema";

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