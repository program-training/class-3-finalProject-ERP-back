import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import mongoose from "mongoose";
import { createServer } from "http";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { typeDefs } from "./graphQL/schema";
import { resolvers } from "./graphQL/rootValue";
import cors from "cors";
import { connectRedic } from "./configuration/redis";

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql'
  });

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const serverCleanup = useServer({ schema }, wsServer);

  const apolloServer = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ]
  });
  await apolloServer.start();
  app.use(express.json())
  app.use(cors())
  app.use("/graphql", express.json(),cors(), expressMiddleware(apolloServer));
   
  const PORT = 4000;
  await mongoose.connect("mongodb+srv://Davidk:David123@cluster0.llwz20q.mongodb.net/ERP-final-project?retryWrites=true&w=majority");
  httpServer.listen(PORT, async () => {
    await connectRedic()
    console.log(`server is listening on port ${PORT}`);
  });
}

startServer();
