import { userData } from "../../configuration/Types";
import { signUp } from "../service/useService";
import { getToken } from "../../services/apiServices";
import { handleError } from "../../utils/handleErrors";


export const signUpC = async (perent: any, args: any) => {
  try {
    const user = args as userData;
    const newUser = await signUp(user);
    const token = await getToken(newUser);
    const arr = {Token:token}
    console.log(arr)
    return arr
  } catch (error) {
    if (error instanceof Error) return handleError(perent, error, 500);
  }
};
export const logInC = async (parent:any, args:any) => {
  console.log(args)
  try {
    const user = args
    const token = await getToken(user);
    const arr = {Token:token}
    console.log(arr)
    return arr
  } catch (error) {
    if (error instanceof Error) return handleError(parent, error, 400);
  }
};
