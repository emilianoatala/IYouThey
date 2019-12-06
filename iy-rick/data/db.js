import mongoose, {Schema, model} from "mongoose"

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/iYouThey", {useNewUrlParser:true})

const postsSchema = new Schema({
    description: String,
    createdAt:String,
    user: mongoose.Types.ObjectId
})

const Posts = model("posts", postsSchema)


const userSchema = new Schema({
    name: String,
    lastname:String,
    email:String,
    password:String,
})

const Users = model("users", userSchema)

const onlineSchema = new Schema({
    
})

const Online = model("online", onlineSchema)


export {Posts, Users, Online}