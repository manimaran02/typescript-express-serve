import express, { NextFunction, Request, Response } from "express"
import { homeController } from "../../controllers/home.controller"

const homeRouter = express.Router()



homeRouter.get('/',homeController)

export default homeRouter

