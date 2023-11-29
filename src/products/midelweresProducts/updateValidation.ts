import { Request, Response, NextFunction } from "express";

export const validateProductUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const requiredFields = [
    "name",
    "salePrice",
    "quantity",
    "description",
    "category",
    "discountPercentage",
  ];
  for (const field of requiredFields) {
    if (!(field in body)) {
      return res
        .status(400)
        .json({ error: `Missing required field: ${field}` });
    }
  }
  next();
};
