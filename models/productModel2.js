import mongoose from "mongoose";



const product= new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    age:{type:Number,required:true,unique:true},
    email:{type:String,required:true,unique:true}

})


const get=mongoose.model("my item",product)
export default get