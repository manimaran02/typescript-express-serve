import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/apperror";

export const genericErrorHandler = (err : AppError,req:Request,res:Response,next : NextFunction)=>{

    res.status(err.statuscode).json({
        success : false,
        message : err.message,
        
    })

}