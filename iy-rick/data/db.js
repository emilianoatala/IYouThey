import mongoose, {Schema, model} from "mongoose"

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/iYouThey", {useNewUrlParser:true})

const postsSchema = new Schema({
    title: String
})

const Posts = model("posts", postsSchema)

export {Posts}