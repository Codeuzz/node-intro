import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        unique: true,
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    passion: {
        type: String
    }
})

const Users = mongoose.model('Users', userSchema)

export default Users