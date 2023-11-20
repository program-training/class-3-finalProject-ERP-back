import { Request, Response } from 'express';
import express from "express";
import cors from "cors";
import router from "./router";
import { connectToDatabase } from "./configuration/mongoDB";
import { ProductModel } from "./configuration/userSchema";

const app = express();


app.use(express.json());
app.use(router)
app.get("/app",(req:Request,res:Response)=>{
  console.log("gilad")
  res.json("gilad")
})

app.listen(3009, async () => {
  await connectToDatabase()
  console.log(`Server is up and running on port 3009`);
});

+

