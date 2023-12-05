import express from "express";
import { signUpC, logInC } from "./controllers/usersControllers";
import {
    getCategoriesC,
    getCategoryByIdC,
  } from "../externalPoints/controllers/controllersExternalPoints";
import { validateData } from "./midelweres/userValidation";
import { schema } from "./schema/schema";
import { graphqlHTTP } from "express-graphql";
import { register } from "module";
const usersRouter = express.Router();

// Resolver
export const root = {
    logIn: logInC,
    signUp: signUpC,
    externalCategories: getCategoriesC,
    externalCategory: getCategoryByIdC,
};

export default usersRouter
