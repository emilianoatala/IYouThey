import express from "express"
import {ApolloServer} from "apollo-server-express"
import {typeDefs} from "./data/schema"
import {resolvers} from "./data/resolvers"
import jwt from "jsonwebtoken"
require("dotenv").config()

const http = require('http');
const PORT = 8070
const app = express()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({req}) =>{
        const token = req.headers["authorization"]
        if(token!=="null"){
            try{
                const currentUser = await jwt.verify(token, process.env.SECRET_TOKEN)
                req.currentUser = currentUser
                return {
                     currentUser
                    }
            }catch(error){
                console.log(error)
            }
        }
             
    }
})

server.applyMiddleware({app})

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, ()=> console.log("El servidor esta corriendo en el puerto "+PORT))