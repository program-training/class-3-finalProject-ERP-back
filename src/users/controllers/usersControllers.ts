// import { first, last } from "cheerio/lib/api/traversing";
// import { User } from "../../configuration/Userinterface";
// import { register, getToken } from "../services/apiServices";
import { Request, Response } from "express";
import { userData } from "../../configuration/Type";
import { register } from "../service/useService";
import { getToken } from "../../services/apiServices";
import { handleError } from "../../utils/handleErrors";

export const signUp = async (req: Request, res: Response) => {
  try {
    const user = req.body.userValid as userData;
    const result = await register(user);
    const token = await getToken(result);
    return res.status(200).send(token);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 500);
  }
};
export const logIn = async (req: Request, res: Response) => {
  try {
    const user = req.body as userData;
    const token = await getToken(user);
    res.status(200).send(token);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error, 400);
  }
};
