import  express  from "express";
import UserSchema from "./Routers/userRouter.js";
import Connection from "./Database/db2.js";


const app=express()


app.use('/api',productRoute)


const PORT=3006

app.listen(PORT,()=>{
console.log(`app is running on port ${PORT}`)
})


Connection()