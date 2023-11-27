import { Request, Response } from "express";


export const handleError = (
    res: Response,
    error: Error,
    status: number = 401
  ) => {
    console.log(error.message);
    return res.status(status).send(error.message);
  };
  