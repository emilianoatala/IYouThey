import {rejects } from "assert"
import { Posts } from "./db";

export const resolvers ={
    Query:{
        getAllPosts:(root)=>{
            return Posts.find({})
        }
    },
    Mutation:{
        setPost:(root, {input})=>{
            let newPost = Posts({
                description:input.description,
                createdAt: new Date()
            })
            newPost.id=newPost._id
            return new Promise ((resolve,object)=>{
                newPost.save(error=>{
                    if (error) rejects(error)
                    else resolve(newPost)
                })
            } )
        }
    }
    
}