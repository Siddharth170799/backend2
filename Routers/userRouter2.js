import expressAsyncHandler from "express-async-handler";
import express, { request }  from "express";
import GetDetails from "../models/userModel2.js";



const UserRoute= express.Router()


UserRoute.post(
    "/post",
    expressAsyncHandler(async(req,res)=>{

        console.log(req.body)
      const {name,email,password} = req.body
        const ProductCreate= new GetDetails({
            name,email,password
        })
        const Create= await ProductCreate.save()
        res.send({message:"userdata",userdata:Create,status:200})
    })
)
UserRoute.post(
    '/post',
    expressAsyncHandler(async(req,res)=>{
        const {name,email,password}=req.body
        const ProductCreate2= new GetDetails({
            name,email,password
        })
        const Create2= await ProductCreate2.save()
        res.send({message:"userdata2",userdata2:Create2,status:200})
    })
)
UserRoute.post(
    '/post/post',
    expressAsyncHandler(async(req,res)=>{

        const UserDetailsCreation= new GetDetails({
            name:"Sidd",
            email:"123@gmail.com",
            password:"hello"
        })

        const gds= await UserDetailsCreation.save()
        res.send({message:"sent product",product:gds,status:200})
    })
)

UserRoute.put(
    "/put/:id",
    expressAsyncHandler(async(req,res)=>{
        const {id} = req.params

        // const Product= GetDetails.findOne({id})
        // const updateProduct = Product.updateOne({
        //     name:"Siddharth123",
        //     email:"boorgusiddharth@gmail.com",
        //     password:"siddharthjuly"
        // })

        const user1={
                name:"Si",
                email:"bgusiddha@gmail.com",
                password:"dharth"
            }

        const product = await GetDetails.findByIdAndUpdate(id,user1)
        // const Create= await updateProduct.save()
        res.send({message:"userdata123",userdata:product,status:200})
    })
)
UserRoute.delete(
    "/delete/:id",
    expressAsyncHandler(async(req,res)=>{
        const {id}=req.params

        const product=await GetDetails.findByIdAndDelete(id)
        res.send({message:"deleted",userdata:product,status:200})
    })
)
UserRoute.put(
    '/put/:id',
    expressAsyncHandler(async(req,res)=>{
        const id=req.params.id
        const user2={
            name:"Sid",
            email:"ddgmail.com",
            password:"sth"
        }

        const get=await GetDetails.findByIdAndUpdate(id,user2)
        res.send({message:"updated",user:get,status:200})
    })
)

UserRoute.get(
    '/get',
    expressAsyncHandler(async(req,res)=>{


        const details=await GetDetails.find();
        res.send({message:"getting details",userdata:details,status:200})
        
    })
)
export default UserRoute