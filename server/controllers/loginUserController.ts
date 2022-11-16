const User = require("../src/models/User");
import { Request, Response } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

type user = typeof User | null | undefined;

export async function loginUserController(req: Request, res: Response) {

    await User.findOne({ email: req.body.email })
        .then((user: user) => {
            bcrypt
            .compare(req.body.password, user.password)
            .then((passwordCheck) => {
            if(!passwordCheck) {
                return res.status(400).send({
                    message: "Passwords does not match",
                    Error,
                });
            }
            const token = jwt.sign(
                {
                    userId: user._id,
                    userEmail: user.email,
                },
                "RANDOM-TOKEN",
                { expiresIn: "24h" }
            );
            res.status(200).send({
                message: "Login Successful",
                email: user.email,
                token,
            });
            })
            .catch((error) => {
                res.status(400).send({
                message: "Passwords does not match",
                error,
                });
            });
        })
        .catch((e: Error) => {
            res.status(404).send({
            message: "Email not found",
            e,
            });
        });
}