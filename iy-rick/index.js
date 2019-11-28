import express from "express"
import {ApolloServer} from "apollo-server-express"
import {typeDefs} from "./data/schema"
import {resolvers} from "./data/resolvers"

const http = require('http');
const PORT = 8070
const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers

})

server.applyMiddleware({app})

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, ()=> console.log("El servidor esta corriendo en el puerto "+PORT))