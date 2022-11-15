
import { config } from "dotenv"

config();
import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from "cors"

import User from "./models/User"
import { getUsersController } from "../controllers/getUsersController";
import { deleteUserController } from "../controllers/deleteUserController";
import { addUserController } from "../controllers/addUserController";

const PORT = 5000;
const app = express();

app.use(cors({ 
    origin: "*"}
));
app.use(express.json());

app.get("/usersList", getUsersController);
app.delete("/usersList/:userId", deleteUserController)
app.post("/usersList", addUserController)

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
