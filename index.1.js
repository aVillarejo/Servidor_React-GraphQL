import express from "express";

import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";

//Creaccion de la aplicacion de express
const app = express();

// const cors = require('cors');
// app.use(cors());

//Creaccion del servidor de apollo, requiere defs y resolvers
const server = new ApolloServer({ typeDefs, resolvers });

//Coneccion entre Apollo y express
server.applyMiddleware({ app });

//Ejecucion del Servidor
const port = 4001;
app.listen({ port }, () =>
  console.log(
    `El servidor esta corriendo - http://localhost:${port}${server.graphqlPath}`
  )
);
