import { signUpC } from "../users/controllers/usersControllers";
import { logInC } from "../users/controllers/usersControllers";
import { itypeImages2,typeImages, typeToken } from "./graphQLType";
import { allProductsC , getProductByIdC ,newProductC ,OneProductPageC } from "../products/controllers/productsControllers";
import graphql, {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLObjectTypeConfig,
  } from "graphql";
import { product } from "./graphQLType";

export const signUpQL = {
    type:typeToken,
    args: {
        user_name: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve:signUpC
}
export const logInQL  = {
    name:"fdsf",
    type:typeToken,
    args: {
        user_name: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    resolve:logInC
}

export const allProductsQL  = {
    name:"allProductsQL",
    type:new GraphQLList (product),
    resolve:allProductsC
}


export const getProductByIdQL  = {
    name:"getProductByIdQL",
    type:product,
    args: {
        id: { type: GraphQLString },
    },
    resolve:getProductByIdC
}

export const newProductQL  = {
    name:"newProductQL",
    type:product,
    args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        salePrice: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
        description:{ type: GraphQLString },
        category: { type: GraphQLString },
        discountPercentage: { type: GraphQLInt },
        //ned image
    },
    resolve:newProductC
}

export const OneProductPageQL  = {
    name:"OneProductPageQL",
    type:new GraphQLList (product),
    args: {
        page: { type: GraphQLInt },
    },
    resolve:OneProductPageC
}