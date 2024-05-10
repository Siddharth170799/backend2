import mongoose from "mongoose";




const Connection=async()=>{

    const URL= 'mongodb://localhost:27017'
    try{
       await mongoose.connect(URL,{})
       console.log("db connected successfully")
    }
    catch(error){
        console.log("db not connected successfully")


    }

}
export default Connection