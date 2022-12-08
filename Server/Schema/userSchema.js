import autoIncrement from 'mongoose-auto-increment';

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    username:String,
    email:String,
    phone:String
})

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin,'user')

const user = mongoose.model('user', userSchema);

export default user;
