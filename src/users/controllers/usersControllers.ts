import { Request, Response } from "express";
import { userData } from "../../configuration/Types";
import { signUp } from "../service/useService";
import { getToken } from "../../services/apiServices";
import { handleError } from "../../utils/handleErrors";

export const signUpC = async (args:userData) => {
  console.log(args);
  
  try {
    const user = args
    const newUser = await signUp(user);
    const token = await getToken(newUser);
    return token
  } catch (error) {
    if (error instanceof Error) return error.message
  }
};
export const logInC = async (args:any) => {
  try {
    const user = args;
    const token = await getToken(user);
    return token
  } catch (error) {
    if (error instanceof Error) return error.message
    
    // if (error instanceof Error) return handleError(res, error, 400);
  }
};
