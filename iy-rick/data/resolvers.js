import {rejects } from "assert"
import { Posts } from "./db";
const { PubSub } = require('apollo-server');
const pubsub = new PubSub();

const POST_ADDED = 'POST_ADDED';

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
                    else {
                        resolve(newPost)
                        pubsub.publish(POST_ADDED, { newPost });
                    }
                })
            } )
        }
    },
    Subscription:{
        newPost:{
            subscribe: () => pubsub.asyncIterator([POST_ADDED])
        }
    }
    
}