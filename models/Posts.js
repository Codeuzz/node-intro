import mongoose, { Schema } from 'mongoose'
import Users from './Users.js'


const PostSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    body: String,
    date: { 
        type: Date, 
        default: Date.now 
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'Users',
        required: true
    }
   
})

const Posts = mongoose.model('Posts', PostSchema)
export default Posts