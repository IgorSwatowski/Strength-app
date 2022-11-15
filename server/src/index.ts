import express, { Request, Response } from "express";
import mongoose from 'mongoose';

import User from "./models/User"

const PORT = 5000;
const app = express();

app.use(express.json());

app.get("/usersList", (req: Request, res: Response) => {
    res.send("hello world");
})

app.post("/register", async (req: Request, res: Response) => {
    console.log(req.body)
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

mongoose.connect('mongodb+srv://monitoringTraining:6utyMYcUzCkv8AeK@cluster0.nm2nwjp.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log(`Listening on port ${PORT}`)
    app.listen(PORT);
})
