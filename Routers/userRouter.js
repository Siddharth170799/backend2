
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import  express  from "express";



const UserRoute= express.Router()


UserRoute.post('/post',

expressAsyncHandler(async(req,res)=>{


    const ProductCreate= new User({
        name:"Siddhxaa",
        email:"boorgusiddaharth@gmai",
        password:"Kia"



    })

    const Create= await ProductCreate.save()
    res.send({message:"data",Product:Create,status:200})

})
)

export default UserRoute