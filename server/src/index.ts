
import { config } from "dotenv"
import express from "express";
import mongoose from 'mongoose';
import cors from "cors"
import cookieParser from "cookie-parser";

import { getUsersController } from "../controllers/getUsersController";
import { deleteUserController } from "../controllers/deleteUserController";
import { addUserController } from "../controllers/addUserController";
import { loginUserController } from "../controllers/loginUserController";

// import privateRoutes from "../routes/private";
import { checkAuth } from "../middlewares/checkAuth";

const PORT = 5000;
const app = express();
app.use(cookieParser());
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

app.get("/dashboard", checkAuth, (req, res) => {
    res.json("You are in private route")
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
