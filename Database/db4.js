import mongoose from "mongoose";



const Connection=async()=>{
  const URL= 'mongodb://localhost:27017/backend'
try{
   await mongoose.connect(URL,{})
   console.log("backend connected successfully")      
}
catch(err){

    console.log(err,"backend not connected successfully")

}

}
export default Connection