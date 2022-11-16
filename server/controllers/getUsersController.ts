import { Request, Response } from "express";
const User = require("../src/models/User");

export async function getUsersController(req: Request, res: Response) {
    const users = await User.find();
    res.json(users)
}