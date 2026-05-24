import express, { Request, Response } from "express";

const v2Router = express.Router()

v2Router.get("/:id/comments",(req:Request,res : Response)=>{
    console.log(req.params)
    let a = req.params
    console.log(a.id)
    res.send("Response from v2 router")
})


export default v2Router