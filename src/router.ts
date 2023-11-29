import express, { Request, Response } from "express";
import usersRouter from "./users/router";
import products from "./products/routerProducts";
import externalPointsRouter from "./externalPoints/routerExternalPoints";

const router = express.Router();

router.use("/api/inventory", products);
router.use("/api/users", usersRouter);
router.use("/api/shop_inventory", externalPointsRouter);

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page is not found")
);

export default router;
