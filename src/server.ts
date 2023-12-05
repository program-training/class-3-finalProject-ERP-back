import express from "express";
import { corsOrigin as cors } from "./cors/cors";
import router from "./router";
import { connectToDatabase } from "./configuration/mongoDB";
import dotenv from "dotenv";
import { Authentication } from "./products/midelweresProducts/Authentication";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./users/schema/schema";
import { logInC, signUpC } from "./users/controllers/usersControllers";
import { editProductC, newProductC } from "./products/controllers/productsControllers";
import { getAllProductsC } from "./externalPoints/controllers/controllersExternalPoints";

const port = process.env.PORT;
dotenv.config();
export const app = express();
const root = {
  logIn: logInC,
  signUp: signUpC,
  externalProducts: getAllProductsC,
  newProduct:newProductC,
  editProduct:editProductC
};

app.use(cors);
app.use(
  "/graphql",
  graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
  })
);

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server is up and running on port ${port}`);
});
