import { getAllProductsC, getCategoriesC, getCategoryByIdC, updateInventoryC } from "../externalPoints/controllers/controllersExternalPoints";
import { OneProductPageC, allProductsC, deleteProductC, editProductC, getProductByIdC, newProductC } from "../products/controllers/productsControllers";
import { logInC, signUpC } from "../users/controllers/usersControllers";

export const root = {
    logIn: logInC,
    signUp: signUpC,
    allProducts: allProductsC,
    OneProductPage: OneProductPageC,
    getProductById: getProductByIdC,
    deleteProduct: deleteProductC,
    ExternalUpdateInventory: updateInventoryC,
    externalProducts: getAllProductsC,
    newProduct: newProductC,
    editProduct: editProductC,
    externalCategories: getCategoriesC,
    externalCategory: getCategoryByIdC,
  };