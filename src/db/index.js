import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


const connectDB = async () => {
    try {
        // Use the full connection string
        const mongoURI = `mongodb+srv://raja:raja123@cluster0.emphs.mongodb.net/`;
        
        console.log(`Connecting to MongoDB with URI: ${mongoURI}`);

        const connectionInstance = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log("MongoDB connection error", err);
        process.exit(1); // Exit the process with failure
    }
};











// const connectDB = async () => {
//     try {
//         // Use the full connection string
//         console.log("fffffffffff", `${process.env.MONGODB_URI.trim()}`);
//         // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI.trim()}` );

//         console.log(`MongoDB connected: ${connectionInstance}`);
//     } catch (err) {
//         console.log("mongoDB connteion Failed", err);
//         process.exit(1); // Exit the process with failure
//     }
// };



// -------------------------------------------------------------------------------------------------------------------

// import mongoose, { connect, connections } from "mongoose";
// import { DB_NAME } from "../constants.js"


// const connectDB = async () => {
//     try {
//                 // Use the full connection string

//         await mongoose.connect(`${process.env.MONGODB_URI.trim()}/${DB_NAME}`)
//         console.log(`mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (err) {
//         console.log("mongoDB connteion Failed", err);
//         process.exit(1)
//     }
// }

// export default connectDB






export default connectDB;
