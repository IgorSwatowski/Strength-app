import { config } from "dotenv"
import express from "express";
import mongoose from 'mongoose';
import cors from "cors"
import cookieParser from "cookie-parser";
import { Express, Request, Response} from 'express';

import { getUsersController } from "../controllers/getUsersController";
import { deleteUserController } from "../controllers/deleteUserController";
import { addUserController } from "../controllers/addUserController";
import { loginUserController } from "../controllers/loginUserController";

import { checkAuth } from "../middlewares/checkAuth";
import connectDB from "../config/db";

const PORT = 5000;
const app: Express = express();
app.use(cookieParser());
config();
connectDB();

app.use(cors(
    { 
        origin: "*"
    }
    ));
app.use(express.json());

// Get all users
app.get("/users", getUsersController);

// Delete user by id
app.delete("/users/:userId", deleteUserController)

// Register new user
app.post("/register", addUserController)

// Login user
app.post("/login", loginUserController)

// Dashboard 
app.get("/dashboard", checkAuth)

app.listen(PORT);