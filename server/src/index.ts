
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

app.get("/usersList", async (req: Request, res: Response) => {
    const users = await User.find();
    res.json(users)
})

app.delete("/usersList/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId);
    res.json(user)
})

app.post("/usersList", async (req: Request, res: Response) => {
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
