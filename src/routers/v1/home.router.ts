import express, { NextFunction, Request, Response } from "express"
import { homeController } from "../../controllers/home.controller"
import { validateRequestBody } from "../../validators"
import { homeSchema } from "../../validators/homeSchema"

const homeRouter = express.Router()

// function typeCheck(req:Request,res:Response,next : NextFunction){
//     if(typeof req.body.name != "string"){
//         res.status(400)
//         res.send("Bad Request")
//     }
//     next()
// }

homeRouter.get('/',validateRequestBody(homeSchema),homeController)

export default homeRouter

