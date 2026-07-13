import { NextFunction, Request, Response } from "express"
import {z} from "zod";
// import { BadRequest } from "../utils/errors/apperror";
import logger from "../config/logger.config";


/**
 * 
 * @param schema - Zod schema to validate the request body
 * @returns - Middleware function to validate the request body
 */

export const validateRequestBody = (schema: z.ZodTypeAny) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        
        try {

            
           logger.info("Validating Request body")
            await schema.parseAsync(req.body);
            logger.info("Request body is valid")
            next();

        } 
        catch (error) {
            // If the validation fails, 
            logger.error("Request body is invalid")
            res.status(400).json({
                message : "invalid Request Body from validate request body",
                success : false,
                error : error,
            })
            
        }
    }
}