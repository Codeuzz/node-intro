import mongoose, { Schema } from 'mongoose'


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
        ref: 'User'
    }
   
})

const Posts = mongoose.model('Posts', PostSchema)
export default Posts