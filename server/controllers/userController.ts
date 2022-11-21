const User = require('../models/User')
const jwt = require('jsonwebtoken')
import { Request, Response } from "express";

export const createToken = (_id: string) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
export const loginUser = async (req: Request, res: Response) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error: any) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
export const signupUser = async (req: Request, res: Response) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error: any) {
    res.status(400).json({error: error.message})
  }
}