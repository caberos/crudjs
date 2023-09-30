import mongoose from "mongoose";

export const connectDB = async () => {
    console.log("----------")
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/crud")
        console.log("++++++++++")
        console.log(">>>>> conectdb ")
    } catch (error) {
        console.log("**********")
        console.log(error)
    }
}

