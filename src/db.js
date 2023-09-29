import mongoose  from "mongoose";

export const connectDB =  async()=>{
    try{
    mongoose.connect('mongodb://localhost:27017/crud')
    console.log(">>>>> conectdb ")
    }catch(error){
        console.log(error)
    }
}