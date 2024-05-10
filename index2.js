import express from "express";

import mongoose from "mongoose";
import Product from "./models/productModel.js";
const port = 7008;

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{
    console.log('db connected successfully')
})
.catch(err=>console.log(err))

app.post('/product',async(req,res)=>{
   
    try{
        const {name,price,description} = req.body;
        const result =  await Product.create({name,price,description});
        return res.status(201).json({
            status:'Success',
            result
            
        })
    }catch(err){
            return res.status(400).json({
                status:"fail",
                error:err.message
            })
    }
    
})


app.listen(port,()=>{
    console.log(`App listening at port ${port}`)
})

