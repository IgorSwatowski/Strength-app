import { Request, Response } from "express";
const User = require("../src/models/User");
import bcrypt from "bcryptjs"

export async function addUserController(req: Request, res: Response) {
        // hash the password
        bcrypt
            .hash(req.body.password, 10)
            .then((hashedPassword) => {
                // create a new user instance and collect the data
                const user = new User({
                    email: req.body.email,
                    password: hashedPassword,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    age: req.body.age,
                });
            user.save()
                .then((result: Response) => {
                    res.status(201).send({
                    message: "User Created Successfully",
                    result,
                    });
                })
                .catch((error: Error) => {
                    res.status(500).send({
                    message: "Error creating user",
                    error,
                    });
                });
            })
            .catch((e) => {
                res.status(500).send({
                message: "Password was not hashed successfully",
                e,
                });
            });
}