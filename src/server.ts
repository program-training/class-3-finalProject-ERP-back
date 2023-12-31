import express from "express";
import { corsOrigin as cors } from "./cors/cors";
import router from "./router";
import { connectToDatabase } from "./configuration/mongoDB";
import dotenv from "dotenv";
import { Authentication } from "./products/midelweresProducts/Authentication";
import { connectRedic } from "./configuration/redis";

const port = process.env.PORT;
dotenv.config();
export const app = express();

app.use(cors);
app.use(Authentication);
app.use(express.json());
app.use(router);

app.listen(port, async () => {
  await connectToDatabase();
  await connectRedic()
  console.log(`Server is up and running on port ${port}`);
});
