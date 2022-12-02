import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { ObjectId } from "mongoose";
const User = require("../models/User")

interface IAuthRequest extends Request {
    user: {
        _id: ObjectId
    }
}
interface JWTPayload {
  _id: ObjectId
}

export const requireAuth = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'});
  }

  const token = authorization.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.SECRET!) as JWTPayload;

    req.user = await User.findOne({ _id: payload._id }).select('_id');
    next();

  } catch (error) {
    console.log(error);
    res.status(401).json({error: 'Request is not authorized'});
  }
}