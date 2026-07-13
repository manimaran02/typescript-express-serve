import { NextFunction, Request, Response } from "express"
import { InternalServer,NotImplemented } from "../utils/errors/apperror"
import logger from "../config/logger.config"





export const homeController =  (req : Request,res : Response,next : NextFunction)=>{
    
    // In version < 5

    try{
        logger.info("Request recieved successfully for v1")
        res.status(200).json({
            success: true,
            message : "request recieved successfully"
        })
    }
    catch(error){
        logger.error("Request recieved successfully for v1")
        throw new NotImplemented("Internal Server problem")
        
    }

    // In version >= 5

    // Not neccessary to throw error // Instead next(error) itt automatically call default error handler in express
    // await fs.readFile("sample")
    // res.status(200).json({
    //     success : true,
    //     message : "File read completed"
    // })


    // res.status(200).json({
    //     message : "Home Page",
    //     success : true
    // })
    
}

// export const homeController = async(req:Request,res:Response) :Promise<void>   =>{
//    res.status(200).json({
//         message : "Response from home controller",
//         success : true
//    })
// }