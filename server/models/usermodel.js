import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String},
},
{
    collection: 'user-data'
})

const modelUser = mongoose.model('UserData', User)

export default modelUser