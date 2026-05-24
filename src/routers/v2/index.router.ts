import express, { Request, Response } from "express";
import { validateRequestBody } from "../../validators";
import { homeSchema } from "../../validators/homeSchema";

const v2Router = express.Router()

v2Router.get("/:id/comments",validateRequestBody(homeSchema),(req:Request,res : Response)=>{
    console.log(req.params)
    let a = req.params
    console.log(a.id)
    res.send("Response from v2 router")
})


export default v2Router