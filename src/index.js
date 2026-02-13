import dotenv from "dotenv"
import { DB_name } from "./constants.js"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

connectDB()






// const connectDB = async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/{DB_name}}`)
//         console.log(`\n mongoDB connected !! DB host : ${connectionInstance}`)
//     } catch (error) {
//         console.error("mongo connection error", error)
//         process.exit(1)
//     }
// }



























// one approach using await to connect db
// import express from "express";
// const app= express();

// (async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_name}`)
//         app.on("error",()=>{
//             console.log("error", error)
//             throw error
//         })

// app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on ${process.env.PORT}`)
// })

//     } catch (error) {
//         console.error("error", error);
//         throw err
//     }
// })()