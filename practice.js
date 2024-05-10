import express from "express";
import Connection from "./Database/db.js";
import productRouter from "./Routers/productRoute.js";
const app= express()

app.use('/api/product',productRouter)

const PORT=3005

app.listen(PORT,()=>{
    console.log(`App is running in the port ${PORT}`)
})
Connection()
