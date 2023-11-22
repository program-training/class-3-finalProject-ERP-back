import { Request, Response } from 'express';
import express from "express";
import {corsOrigin as cors} from './cors/cors';
import router from "./router";
import { connectToDatabase } from "./configuration/mongoDB";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors)
app.use(express.json());
app.use(router)

app.listen(port, async () => {
  await connectToDatabase()
  console.log(`Server is up and running on port ${port}`);
});


