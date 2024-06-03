import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRouter from "./userRoutes"


const app = express();
const server = http.createServer(app);
const {PORT} = process.env || 4000;

mongoose.connect(process.env.MONGO_URL!);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("mongodb connected");   
})

app.use(cors());
app.use(express.json())

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`); 
})

app.use("/", userRouter)