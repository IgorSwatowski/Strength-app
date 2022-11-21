const User = require('../models/User')
const jwt = require('jsonwebtoken')
import { Request, Response } from "express";

// delete a user
export const deleteUser = async (req: Request, res: Response) => {
        const userId = req.params.userId;
        const user = await User.findByIdAndDelete(userId);
        res.json(user)
  }
  
  // Get users 
  export const getUsers = async (req: Request, res: Response) => {
        const users = await User.find();
        res.json(users)
  }

module.exports = {
    getUsers,
    deleteUser
}