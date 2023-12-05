import express from "express";
import { corsOrigin as cors } from "./cors/cors";
import router from "./router";
import { connectToDatabase } from "./configuration/mongoDB";
import dotenv from "dotenv";
import { Authentication } from "./products/midelweresProducts/Authentication";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./users/schema/schema";
// import { root } from "./users/router";
import { logInC, signUpC } from "./users/controllers/usersControllers";
import { OneProductPageC, allProductsC, deleteProductC, getProductByIdC } from "./products/controllers/productsControllers";
import { updateInventoryC } from "./externalPoints/controllers/controllersExternalPoints";


const port = process.env.PORT;
dotenv.config();
export const app = express();

app.use(cors);
const root = {
  logIn: logInC,
  signUp: signUpC,
  allProducts:allProductsC,
  OneProductPage:OneProductPageC,
  getProductById:getProductByIdC,
  deleteProduct:deleteProductC,
  ExternalUpdateInventory:updateInventoryC
};
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
