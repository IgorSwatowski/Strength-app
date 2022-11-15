
import { config } from "dotenv"

config();
import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from "cors"

import User from "./models/User"

const PORT = 5000;
const app = express();

app.use(cors({ 
    origin: "*"}
));
app.use(express.json());


app.get("/dashboard", (req: Request, res: Response) => {
    res.send("Witaj w dashboard")
})

app.get("/usersList", async (req: Request, res: Response) => {
    const users = await User.find();
    res.json(users)
})

app.post("/users", async (req: Request, res: Response) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        emailAddress: req.body.emailAddress,
        weight: req.body.weight,
        height: req.body.height
    });
    const createdUser = await newUser.save();
    res.json(createdUser)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
