import { rejects } from "assert"
import { Posts, Users, Online } from "./db";
import jwt from "jsonwebtoken"
const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
const POST_ADDED = 'POST_ADDED';
const USER_LOGGED = 'USER_LOGGED';
const USER_DISCONNECTED = 'USER_DISCONNECTED';



require("dotenv").config()

const createUser = (email, secret, expiresIn)=> jwt.sign({email}, secret, {expiresIn})



export const resolvers ={
    Query:{
        getAllPosts: (root)=>{
          return new Promise((resolve, object)=>{
            Posts.find({}, (error, posts)=>{
                Users.populate(posts,{path:"user"}, (error, posts)=>{
                  if (error) reject(error)
                  resolve(posts) 
                })
            })
          })   
        },
        getUser: (root, args, {currentUser})=>{
            if(!currentUser) return null
            const user = Users.findOne({email:currentUser.email})

            return user
        }
    },
    Mutation:{
        setPost: async (root, {input})=>{
            let newPost = Posts({
                description:input.description,
                createdAt: new Date(),
                user:input.user

            })
            newPost.id=newPost._id


            let user = await Users.find({_id:newPost.user})
            
            return new Promise ((resolve,object)=>{
                newPost.save( async error=>{
                    if (error) rejects(error)
                    else {
                        resolve(newPost)
                        let sendPost = newPost.toObject()
                        sendPost.user = user[0]
                        pubsub.publish(POST_ADDED, {newPost:sendPost});   
                    }
                })
            })

            
        },
        createUser: async (root, {input})=>{
            const {email} = input
            const userExist = await Users.findOne({email})

            if (userExist){
                throw new Error ("User already exist")
                
            }
         
            let newUser = new Users({
                name:input.name,
                lastname:input.lastname,
                email:input.email,
                password:input.password
            })
            newUser.id=newUser._id
            return new Promise((resolve, object)=>{
                newUser.save(error=>{ 
                    if (error) rejects(error)
                    else resolve(newUser)
                })
            })
        },
        validateUser: async (roor, {input})=>{
            const {email, password}= input
            const userExist = await Users.findOne({email})

            if(!userExist){
                throw new Error ("User don´t exist")
            }

            if (password === userExist.password){
                delete userExist.password
                let userLogged = new Online({})
                userLogged.id=userLogged._id
                new Promise((resolve, object)=>{
                    userLogged.save(error=>{ 
                        if (error) rejects(error)
                        else {
                            pubsub.publish(USER_LOGGED, {userLogged:userExist})
                            resolve(userLogged)
                        }
                    })
                })


                
                return {
                    token: createUser(userExist.email, process.env.SECRET_TOKEN, "23hr"),
                }
            }
            else{
                throw new Error ("password is incorrect")
            }
        },
        logout: (root,{id})=>{
            return new Promise ((resolve, object)=>{
                Online.findOneAndDelete({_id:id}, error=>{
                    if (error) reject(error)
                    else {
                        pubsub.publish(USER_DISCONNECTED, {userDisconnected:{id}})
                        resolve({message:'Users succesfull deleted'})
                    }
                })
            })
        }
    },
    Subscription:{
        newPost:{
            subscribe: () => pubsub.asyncIterator([POST_ADDED])       
        },
        userLogged:{
            subscribe: () => pubsub.asyncIterator([USER_LOGGED])       
        },
        userDisconnected:{
            subscribe: () => pubsub.asyncIterator([USER_DISCONNECTED])       
        }
    }
    
}