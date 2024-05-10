import expressAsyncHandler from "express-async-handler";
import  express  from "express";
import product from "../models/productModel2.js";


const productRoute=express.Router();

productRoute.post(
    '/post',
    expressAsyncHandler (async(req,res)=>{
        const  productCreationinDatabase=new product({
         
name:"siddharth",
            age:23,
            email:"boorgusiddharth@gmail.com"
        });

        const Hello= await productCreationinDatabase.save()
        res.send({message:"data",product:Hello,status:200})

    })
)


export default productRoute