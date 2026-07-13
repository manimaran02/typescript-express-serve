import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/apperror";
import logger from "../config/logger.config";

export const genericErrorHandler = (err : AppError,req:Request,res:Response,next : NextFunction)=>{

    // Need to fix the Zod error zod error doesn't send any statusscode manually coded 400
    res.status(err.statuscode || 400).json({
        success : false,
        message : err.message,
        name : err.name
        
    })

}