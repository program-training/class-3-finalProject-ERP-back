import { Request, Response } from "express";
import { startAndEndDate, userData } from "../../configuration/Types";
import { signUp, getRegistrationData } from "../service/useService";
import { getToken } from "../../services/apiServices";
import { handleError } from "../../utils/handleErrors";
import { pubsub } from "../../graphQL/rootValue";

export const signUpC = async (_:any,args: userData) => {
  try {
    const user = args;
    const newUser = await signUp(user);
    pubsub.publish("registerData", { registerData: registerDataC });
    const token = await getToken(newUser);
    return token;
  } catch (error) {
    throw error
  }
};
export const logInC = async (_:any,args: any) => {
  try {
    console.log(args);
    const user = args;
    const token = await getToken(user);
    return token;
  } catch (error) {
    throw error
  }
};


export const registerDataC = async (_:any, args: startAndEndDate) => {
  try {
    const dates = {
      "end": "2024-01-01",
      "start": "2023-12-01"
    }
    const data = getRegistrationData(dates)
    return data
  }  catch (error) {
    throw error
  }
};