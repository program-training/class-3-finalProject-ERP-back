import express from 'express';
import { signUp } from './controllers/usersControllers';
import { logIn } from './controllers/usersControllers';


const usersRouter = express.Router();

usersRouter.post('/register',signUp )
usersRouter.post('/logIn',logIn)



export default usersRouter