// src/db/index.js

import mongoose from "mongoose"
import { DB_name } from "../constants.js"     // ← two dots = go up to src/, then constants.js

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_name}`
        )

        console.log(
            `MongoDB is connected !! DB host: ${connectionInstance.connection.host}`
        )
    } catch (error) {
        console.log(`MongoDB connection error: ${error}`)
        process.exit(1)
    }
}

export default connectDB