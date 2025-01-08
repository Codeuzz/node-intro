import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    passion: {
        type: String
    }
})

const Users = mongoose.model('User', userSchema)

export default Users