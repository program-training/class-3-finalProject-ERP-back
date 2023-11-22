import { productUpdate } from "../configuration/TypeUser";
import { ProductModel } from "../configuration/userSchema";

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