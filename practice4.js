import express from "express";
import Connection from "./Database/db5.js";
import UserRoute from "./Routers/userRouter2.js";


const app=express()
app.use(express.json())
app.get("/",function(req,res){
res.send("hi this is siddharth")
})

app.use(UserRoute)

const PORT=3050
app.listen(PORT,()=>{
    console.log(`app is running on ${PORT} `)
})

Connection()