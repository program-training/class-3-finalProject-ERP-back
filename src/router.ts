import express, { Request, Response } from "express";
import usersRouter from "./users/router";
import productsRouter from "./products/router";
import externalPointsRouter from "./externalPoints/router/routerExternalPoints";
import { Authentication } from "./users/midelweres/Authentication";
const router = express.Router();

router.use('/api/inventory',Authentication, productsRouter)
router.use('/api/users',usersRouter)
router.use('/api/shop_inventory',externalPointsRouter)


router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page is not found")
);

export default router;
