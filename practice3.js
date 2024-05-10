import Connection from "./Database/db4.js";
import  express  from "express";
import UserRoute from "./Routers/userRouter.js";

const app=express()


app.use('/api',UserRoute
)


const PORT=3016;

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}` )
})


Connection()