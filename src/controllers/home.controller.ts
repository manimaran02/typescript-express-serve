import { NextFunction, Request, Response } from "express"
import fs from "fs/promises"
import { NotFoundError } from "../utils/errors/apperror"




export const homeController =  async(req : Request,res : Response,next : NextFunction)=>{
    
    // In version < 5

    try{
        await fs.readFile("sample")
        res.status(200).json({
            success: true,
            message : "file read completed"
        })
    }
    catch(error){
        throw new NotFoundError("File is not found")
    }

    // In version >= 5


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