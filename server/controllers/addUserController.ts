import { Request, Response } from "express";
import User from "../src/models/User";

export async function addUserController(req: Request, res: Response) {
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
}