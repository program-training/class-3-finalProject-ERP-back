import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userData } from '../../configuration/TypeUser';
import { secretKey } from '../../configuration/jwt';

const valid = ["/api/users", "/api/shop_inventory"]



export const Authentication = async (req: Request, res: Response, next: NextFunction) => {
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
                // req.body.user = { user_name: decoded.user.user_name, password: decoded.user.password } as userData
                next();
            }
            else {
                console.log(decoded);
                res.send("err")
            }
        }
    });
};
