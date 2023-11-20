import { Request, Response } from "express";

export const allProducts = (req:Request, res:Response) => {
    const {search} = req.query
    if (!search){

    }
    res.send(search)
}
