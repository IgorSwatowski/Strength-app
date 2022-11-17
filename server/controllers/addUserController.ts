import { Request, Response } from "express";
import User from "../src/models/User"
import bcrypt from "bcryptjs"

export async function addUserController(req: Request, res: Response) {
    try{
        if(req.body.password){
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    
          const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
        })
          await newUser.save();
          res.status(201).json('New User Created');
        }else{
          res.status(403).json('please provide a password');
        }
      }catch(err){
        res.status(500).json(err);
      }
}
