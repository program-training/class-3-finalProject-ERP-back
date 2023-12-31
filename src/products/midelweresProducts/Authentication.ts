import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { secretKey } from "../../configuration/jwt";

export const Authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = req.originalUrl;
  if (url.includes("/shop_inventory") || url.includes("/users")) {
    next();
  } else {
    const token = req.headers["authorization"];
    if (!token) {
      res.status(400).send("token is required");
      return;
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(400).send("Failed to verify token:" + err);
      } else {
        next();
        return;
      }
    });
  }
};
