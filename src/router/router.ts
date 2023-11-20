import express, { Request, Response } from "express";
import usersRouter from "../users/router";
import productsRouter from "../products/router";
const router = express.Router();


router.use('/products',productsRouter)
router.use('/users',usersRouter)


router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page is not found")
);

export default router;