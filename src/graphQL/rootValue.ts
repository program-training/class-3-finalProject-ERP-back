import { ProductModel } from "../configuration/mongooseSchema";
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
import { logInC, signUpC, registerDataC } from "../users/controllers/usersControllers";
import { PubSub } from "graphql-subscriptions";


export const pubsub = new PubSub();


export const resolvers = {
  Query: {
    allProducts:allProductsC,
    registerData: registerDataC,
    OneProductPage: OneProductPageC,
    getProductById: getProductByIdC,
    graf: dataGrafC,
    grafUser: grafUserC,
    externalProducts: getAllProductsC,
    externalCategories: getCategoriesC,
    externalCategory: getCategoryByIdC,
  },
  Mutation: {
    async editProduct(_: any, { productInput }: any) {
      try {        
        const editedProduct = await editProductC(productInput);
        pubsub.publish("graf", { graf: dataGrafC });
        return editedProduct;
      }
      catch (error) {
        throw error
      }

    },
    logIn: logInC,
    signUp: signUpC,
    deleteProduct: deleteProductC,
    ExternalUpdateInventory: updateInventoryC,
  },

  Subscription: {
    graf: {
      subscribe: async () => {
        return pubsub.asyncIterator(["graf"])
      },
    },
    registerData: {
      subscribe: async () => {
        return pubsub.asyncIterator(["registerData"])
      },
    },
  },

};

// export const root = {
//   logIn: logInC, //1
//   signUp: signUpC, //1
//   registerData: registerDataC,
//   allProducts: allProductsC, //1
//   OneProductPage: OneProductPageC, //1
//   getProductById: getProductByIdC, //1
//   graf: dataGrafC, //1
//   grafUser: grafUserC, //0
//   deleteProduct: deleteProductC, //1
//   ExternalUpdateInventory: updateInventoryC, //1
//   externalProducts: getAllProductsC, //1
//   newProduct: newProductC, //1
//   editProduct: editProductC, //1
//   externalCategories: getCategoriesC, //1
//   externalCategory: getCategoryByIdC, //1
// };
