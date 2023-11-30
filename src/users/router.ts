import express from "express";
import { signUpC, logInC } from "./controllers/usersControllers";
import { validateData } from "./midelweres/userValidation";

const usersRouter = express.Router();

usersRouter.post("/register", validateData, signUpC);
usersRouter.post("/logIn", logInC);

export default usersRouter;
