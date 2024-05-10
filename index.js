// const http=require('http')
// import http from 'http'
// import Connection from './db.js';
// const cc = require("node-console-colors");
// import express from 'express';

// const app=express()
// app.get('/',function(req,res){
//     res.send("Hello Boorgu")

// })

// app.get('/fsd/:batchno',function(req,res){
//     console.log(req.params.batchno,"pppp")
//     res.send(req.params.batchno==31? 'handled by jai':"other trainers handling the batch")
// })

// app.listen(3001,()=>{
//     console.log("app is running on local host 3001")
// })



// Connection()


// const app=express()

// app.get('/',function(req,res){
//     res.send('Hello Pallavi')
// })

// app.get('/:products',function(req,res){
//     res.send('apple')
// })


// app.listen(3002,()=>{
//     console.log("server running on 3002")
// })

// Connection()

// console.log(cc.set("fg_red", "Hello World in red"))


import  express  from "express"




const app=express();

app.get('/',function(req,res){

    res.send("Hello Pallavi")

})

// app.get('/fsd/:batchno',function(req,res){
//     console.log()
// })

const PORT=3005
app.listen(PORT,()=>{
    console.log(`app running in the local host ${PORT}`)
})







