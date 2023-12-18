import { getAllProductsC, getCategoriesC, getCategoryByIdC, updateInventoryC } from "../externalPoints/controllers/controllersExternalPoints";
import { OneProductPageC, allProductsC, dataGrafC, deleteProductC, editProductC, getProductByIdC, grafUserC, newProductC } from "../products/controllers/productsControllers";
import { logInC, signUpC, registerDataC } from "../users/controllers/usersControllers";

export const root = {
    logIn: logInC, //1
    signUp: signUpC, //1
    registerData: registerDataC,
    allProducts: allProductsC, //1


    
    OneProductPage: OneProductPageC, //0
    getProductById: getProductByIdC, //1
    graf:dataGrafC, 
    grafUser:grafUserC,
    deleteProduct: deleteProductC, //0
    ExternalUpdateInventory: updateInventoryC, 
    externalProducts: getAllProductsC, //0
    newProduct: newProductC, //1
    editProduct: editProductC,
    externalCategories: getCategoriesC,
    externalCategory: getCategoryByIdC,
  };