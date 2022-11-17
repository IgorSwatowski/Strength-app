import jwt from "jsonwebtoken"
import { Request, Response } from "express";

export const checkAuth = (req: any, res: any, next: any) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json("You're not authenticated")
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err: any, payload: any) => {
        if (err) {
            return res.status(403).json("Invalid token")
        }
        req.user = {
            id: payload.id
        }
        next();
    })
}