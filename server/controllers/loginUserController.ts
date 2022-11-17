const User = require("../src/models/User");
import { Request, Response } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { config } from "dotenv"

export async function loginUserController(req: Request, res: Response) {

    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return res.status(404).json("Your credentials is invalid")
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

        if (!isPasswordCorrect) {
            return res.status(404).json("Your credentials is invalid")
        }

        const payload = {
            userId: user._id,
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET!, {
            expiresIn: "1d"
        })
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({
            email: user.email
        })
    }

    catch(err) {
        res.status(500).json(err)
    }
}