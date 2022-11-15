
import { config } from "dotenv"
import express from "express";
import mongoose from 'mongoose';
import cors from "cors"

import { getUsersController } from "../controllers/getUsersController";
import { deleteUserController } from "../controllers/deleteUserController";
import { addUserController } from "../controllers/addUserController";

const PORT = 5000;
const app = express();
config();

app.use(cors(
    { 
        origin: "*"
    }
    ));
app.use(express.json());

app.get("/users", getUsersController);
app.delete("/users/:userId", deleteUserController)
app.post("/users", addUserController)

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
