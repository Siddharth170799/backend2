import  express  from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler"


const productRouter=express.Router();



productRouter.post('/post',expressAsyncHandler(async(req,res)=>{

    console.log("function called here")
    const  productCreationinDatabase=new Product({
        name:"shoes"+ Date.now(),
        price:200,
        countInStock:0,
        rating:0,
        numReviews:0,
        description:"sg",
    });
    const createdProduct=await productCreationinDatabase.save();
    res.send({message:"product created",product:createdProduct,status:200})


   

})
)
productRouter.get('/get',expressAsyncHandler(async(req,res)=>{
    console.log("function called here")

    const createdProduct=await Product.find();
    res.send({message:"product listed",product:createdProduct})
}))
export default productRouter
