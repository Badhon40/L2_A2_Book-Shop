import { Request, Response } from "express";
import User from "./user.model";


const createUser=async(req: Request, res: Response)=>{
    try {
        const payLoad=req.body

        const result=  await User.create(payLoad)
        res.json({
            message: " user created successfully",
        data : result
        })
        
    } catch (error) {
        res.json({
            status: false,
            message: "something went wrong",
            error
         })
        
    }
}

export const useController={
    createUser
}