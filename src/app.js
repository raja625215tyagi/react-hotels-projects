import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app= express()
// handel the cors error
app.use(cors({
  origin:process.env.CORS_ORIGIN ,
  credentials:true 
}))
// accept the json data or limit hogi 16kb
app.use(express.json({limit:"16kb"}))
// accept special charecter or limit hogi 16kb
app.use(express.urlencoded({extended:true, limit:"16kb"}))
// accept static file like pdf and images 
app.use(express.static("public"))
// save cookie user system and read only browser
app.use(cookieParser3333())
export {app}