import mongoose from "mongoose";


const productSchema=new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    price:{type:Number,required:true},
    description:{type:String,required:true}

})


const Product=mongoose.model('my product',productSchema);



export default Product;