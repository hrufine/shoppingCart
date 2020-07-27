import express from "express";
import { createServer } from "http";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import { AuthController } from "../api/authentication/auth.controller";
import mongoose from 'mongoose'
import { DashboardController } from "../api/dashboard/dashboard.controller";

mongoose.connect('mongodb+srv://jishnummc:1234@cluster0.hdiz6.mongodb.net/shopping_cart?retryWrites=true&w=majority').then((res)=>{
    console.log("Connected successfully");
});


const app = express();
const server = createServer(app);

//Setup Http-Logger Morgan Middleware
app.use(logger('dev'));
//Setup CORS Middleware for Handling CORS Errors
app.use(cors());

//Import Employee Routes

//Setup Static Folder Path
app.use(express.static(path.resolve(__dirname, '../public')));

//Setup Body-Parser & Cookie-Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.post('/login',AuthController);
app.get('/dashboard',DashboardController);
//Setup Port & Listening to Server
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`server running on port ${port}!!`));