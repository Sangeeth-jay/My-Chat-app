import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import "dotenv/config";


const app = express();
const server = http.createServer(app);
const {PORT} = process.env || 4000;


app.use(cors());

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})