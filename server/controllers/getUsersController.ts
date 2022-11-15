import { Request, Response } from "express";
import User from "../src/models/User";

export async function getUsersController(req: Request, res: Response) {
    const users = await User.find();
    res.json(users)
}