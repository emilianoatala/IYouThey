import express from "express"
import {ApolloServer} from "apollo-server-express"
import {typeDefs} from "./data/schema"
import {resolvers} from "./data/resolvers"
const PORT = 5000
const app = express()
const server = new ApolloServer({typeDefs, resolvers})

server.applyMiddleware({app})

app.listen(PORT, ()=> console.log("El servidor esta corriendo en el puerto "+PORT))