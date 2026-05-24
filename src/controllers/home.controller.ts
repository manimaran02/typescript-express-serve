import { Request, Response } from "express"


export const homeController = (req : Request,res : Response)=>{
    // console.log(req?.body)
    // console.log(req.query)
    res.status(200).json({
        message : "Home Page",
        success : true
    })
    
}