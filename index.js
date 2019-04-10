import express from "express";

import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";

//Creaccion de la aplicacion de express
const app = express();

// const cors = require('cors');
// app.use(cors());

//Creaccion del servidor de apollo, requiere defs y resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    //endpoint: `http://localhost:4000/graphql`,
    settings: {
      "editor.theme": "dark",
      "introspection": true
    }
  }
});

//Coneccion entre Apollo y express
server.applyMiddleware({ app });

//Ejecucion del Servidor
app.listen({ port: process.env.PORT || 3000 }, () =>
  console.log(`Server started on port: ${process.env.PORT || 3000}`)
);
