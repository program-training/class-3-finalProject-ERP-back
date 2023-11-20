import { ProductModel } from "../../configuration/userSchema";

export const getProductFromDB = async (productID: string) => {
  try {
    const product = await ProductModel.findById(productID);
    return product;
  } catch (err) {
    return err;
  }
};
