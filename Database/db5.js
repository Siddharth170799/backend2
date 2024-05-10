import mongoose from "mongoose";


const Connection =async()=>{
 const URL= 'mongodb://localhost:27017/Holi'
try{
    await mongoose.connect(URL,{})
    console.log("backend connected")
}
catch(error){
console.log(error,"database not connected successfully")
}

}
export default Connection