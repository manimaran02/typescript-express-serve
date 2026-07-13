import express, { Request, Response } from "express";
import { validateRequestBody } from "../../validators";
import { homeSchema } from "../../validators/homeSchema";
import logger from "../../config/logger.config";
import { NotImplemented } from "../../utils/errors/apperror";

const v2Router = express.Router()

v2Router.get("/:id/comments",validateRequestBody(homeSchema),(req:Request,res : Response)=>{
   
    try{
        logger.info("Request recieved successfully for v2",{correaltionId : req.headers['X-CorrelationId']})
        res.status(200).json({
            success: true,
            message : "Response from v2 router"
        })
    }
    catch(error){
        logger.error("Request recieved successfully for v2",{correaltionId : req.headers['X-CorelationId']})
        throw new NotImplemented("Internal Server problem")
        
    }
})


export default v2Router