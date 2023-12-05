import express from "express";
import { corsOrigin as cors } from "./cors/cors";
import { connectToDatabase } from "./configuration/mongoDB";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphQL/schema";
import { root } from "./graphQL/rootValue";


const port = process.env.PORT;
dotenv.config();
export const app = express();

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
