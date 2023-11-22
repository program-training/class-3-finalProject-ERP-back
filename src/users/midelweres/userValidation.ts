import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import { userData } from '../../configuration/TypeUser';
import { Error } from 'mongoose';

export const validateData = async (req: Request, res: Response, next: NextFunction) => {
  const userFromClient = req.body
  try {
    const schema = yup.object().shape({
      user_name: yup
        .string()
        .min(5)
        .matches(/[A-Za-z]{4,}/),
      password: yup
        .string()
        .min(7,)
        .matches(
          /^(?=.*[0-9]).{1,20}$/, "password must contain numbers")
        .matches(
          /^(?=.*[a-z]).{4,20}$/, "password must contain chares"),
    });
    await schema.validate(userFromClient);
    req.body.userValid = { user_name: userFromClient.user_name, password: userFromClient.password } as userData
    next();
  } catch (error: any) {
    console.error(error);
    res.status(400).send(error.message);
  }
};
