import User from "../src/models/User"
import { Request, Response } from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const loginUserController = async (req: Request, res: Response) =>{
    try{
      const user = await User.findOne({
        email: req.body.email
      });
      if(!user){
        return res.status(404).json('no user found');
      }
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
      if(!isPasswordCorrect){
        return res.status(400).json('wrong password');
      }
  
      const payload = {
        id: user._id
      }
      const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1d'});
      res.cookie('access_token', token, {
        httpOnly: true
      }).status(200).json({
        email: user.email
      })
    }
    catch(err){
      res.status(500).json(err);
    }
  }