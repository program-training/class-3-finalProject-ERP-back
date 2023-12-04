import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { OneProductPageQL, getProductByIdQL, newProductQL, signUpQL } from "./graphQLRoot";
import { logInQL } from "./graphQLRoot";
import { allProductsQL } from "./graphQLRoot";

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    allProducts: allProductsQL,
    getProductById:getProductByIdQL,
    OneProductPage:OneProductPageQL
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: signUpQL,
    logIn: logInQL,
    newProduct:newProductQL,
  },
});

export const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: Mutation,
});
