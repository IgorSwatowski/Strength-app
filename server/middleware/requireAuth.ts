import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { ObjectId } from "mongoose";
const User = require("../models/User")

interface IAuthRequest extends Request {
    user: {
        _id: ObjectId
    }
}

export const requireAuth = async (req: IAuthRequest, res: Response, next: any) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id }: any = jwt.verify(token, process.env.SECRET!)

    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}