import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "../env"
})

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error: DB not connected", error);
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at part${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MONGO db connection failed !!!", error);
    })






// import mongoose from "mongoose";
// import express from "express";
// import DB_NAME from "./db/index.js"
// const app = express();

// (async () => {
//     try {
//         // Corrected the connection string format and used .trim() to remove any unwanted spaces or newlines
//         await mongoose.connect(`${process.env.MONGODB_URI.trim()}/${DB_NAME}`, {
//             useNewUrlParser: true, 
//             useUnifiedTopology: true,
//         });

//         console.log("Database connected successfully");

//         app.on("error", (error) => {
//             console.log("Error: DB not connected", error);
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is working on PORT ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("Database  conniction faild:", error);
//         throw error;  // Use error instead of err
//     }
// })();
