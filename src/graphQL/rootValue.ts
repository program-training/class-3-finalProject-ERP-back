import {
  getAllProductsC,
  getCategoriesC,
  getCategoryByIdC,
  updateInventoryC,
} from "../externalPoints/controllers/controllersExternalPoints";
import {
  OneProductPageC,
  allProductsC,
  dataGrafC,
  deleteProductC,
  editProductC,
  getProductByIdC,
  grafUserC,
  newProductC,
} from "../products/controllers/productsControllers";
import { logInC, signUpC } from "../users/controllers/usersControllers";

export const root = {
  logIn: logInC, //1
  signUp: signUpC, //1
  allProducts: allProductsC, //1
  OneProductPage: OneProductPageC, //1
  getProductById: getProductByIdC, //1
  graf: dataGrafC, //1
  grafUser: grafUserC, //0
  deleteProduct: deleteProductC, //1
  ExternalUpdateInventory: updateInventoryC, //1
  externalProducts: getAllProductsC, //1
  newProduct: newProductC, //1
  editProduct: editProductC, //1
  externalCategories: getCategoriesC, //1
  externalCategory: getCategoryByIdC, //1
};
