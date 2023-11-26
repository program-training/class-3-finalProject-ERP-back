// import { first, last } from "cheerio/lib/api/traversing";
// import { User } from "../../configuration/Userinterface";
// import { register, getToken } from "../services/apiServices";
import { Request, Response } from 'express';
import { userData } from '../../configuration/TypeUser';
import { register } from '../service/useService';
import { getToken } from '../../services/apiServices';


export const signUp = async (req: Request, res: Response) => {
    try {
        const user = req.body.userValid as userData;
        const result = await register(user)
        const token = await getToken(result)
        return res.status(200).send(token);
    } catch (err: any) {
        return res.status(400).send(err.message);
    }
}
export const logIn = async (req: Request, res: Response) => {
    try {
        const user = req.body as userData;
        const token = await getToken(user)
        res.status(200).send(token)
    }
    catch (err: any) {
        res.status(400).send(err.message)
    }
}