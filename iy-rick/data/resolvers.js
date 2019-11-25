import {rejects } from "assert"
import { Posts } from "./db";

export const resolvers ={
    Query:{
        getAllPosts:(root)=>{
            return Posts.find({})
        }
    }
    
}