import express from 'express';
import { signUp } from './controllers/usersControllers';
import { logIn } from './controllers/usersControllers';
import { validateData } from './midelweres/userValidation';


const usersRouter = express.Router();

usersRouter.post('/register', validateData, signUp )
usersRouter.post('/logIn',logIn)



export default usersRouter