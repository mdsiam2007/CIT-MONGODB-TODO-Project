import mongoose from "mongoose";

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGODBURL)
    console.log("Mongodb Connected Successfully")
}

export {
    dbConnect
}