import { Request, Response } from "express";
import User from "../src/models/User";

export async function addUserController(req: Request, res: Response) {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
    });
    const createdUser = await newUser.save();
    res.json(createdUser)
}