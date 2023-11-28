import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userData } from '../../configuration/TypeUser';
import { secretKey } from '../../configuration/jwt';

export const Authentication = async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl
    if(url.includes("/api/shop_inventory") || url.includes('/api/users')){
        next()
    }else{
    const token = req.headers['authorization']
    if (!token) {
        res.status(400).send("token is required")
        return
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            res.status(400).send('Failed to verify token:' + err);
        } else {
            if (typeof (decoded) === "object") {
                next();
            }
            else {
                console.log(decoded);
                res.send("err")
            }
        }
    });
}
};
