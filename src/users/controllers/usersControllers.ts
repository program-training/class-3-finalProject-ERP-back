import { Request, Response } from "express";
import { startAndEndDate, userData } from "../../configuration/Types";
import { signUp, getRegistrationData } from "../service/useService";
import { getToken } from "../../services/apiServices";
import { handleError } from "../../utils/handleErrors";

export const signUpC = async (args: userData) => {
  try {
    const user = args;
    const newUser = await signUp(user);
    const token = await getToken(newUser);
    return token;
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};
export const logInC = async (args: any) => {
  try {
    const user = args;
    const token = await getToken(user);
    return token;
  } catch (error) {
    throw error
  }
};


export const registerDataC = async (args: startAndEndDate) => {
  try {
    const dates = args;
    const data = getRegistrationData(dates)
    return data
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};