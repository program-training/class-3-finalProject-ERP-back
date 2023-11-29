import { Request, Response } from "express";
import { userData } from "../../configuration/Types";
import { signUp } from "../service/useService";
import { getToken } from "../../services/apiServices";
import { handleError } from "../../utils/handleErrors";

export const signUpC = async (req: Request, res: Response) => {
  try {
    const user = req.body.userValid as userData;
    const newUser = await signUp(user);
    const token = await getToken(newUser);
    return res.status(200).send(token);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};
export const logInC = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const token = await getToken(user);
    res.status(200).send(token);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};
