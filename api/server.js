import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import cookieParser from 'cookie-parser'
const server = express()
dotenv.config()

const connect = () => {
    try {
        mongoose.set("strictQuery", false);
         mongoose.connect(process.env.MONGO_URL);  
        console.log("Connect to mongoDB")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
});

//middlewares
server.use(cookieParser())
server.use(express.json())

server.use("/api/auth", authRoute)
server.use("/api/users", usersRoute)
server.use("/api/hotels", hotelsRoute)

server.use((err,req, res, next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Algo deu errado!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})



server.listen(8800, ()=>{
    connect()
    console.log("Conectado ao back-end")
})