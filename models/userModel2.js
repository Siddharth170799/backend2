import mongoose from "mongoose";


const UserDetails=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}

})

const GetDetails=mongoose.model("new user",UserDetails)
export default GetDetails