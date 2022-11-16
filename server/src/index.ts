
import { config } from "dotenv"
import express from "express";
import mongoose from 'mongoose';
import cors from "cors"

import { getUsersController } from "../controllers/getUsersController";
import { deleteUserController } from "../controllers/deleteUserController";
import { addUserController } from "../controllers/addUserController";
import { loginUserController } from "../controllers/loginUserController";

const PORT = 5000;
const app = express();
config();

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

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
