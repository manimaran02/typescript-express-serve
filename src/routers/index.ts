import express from "express"
import homeRouter from "./v1/home.router"
import v2Router from "./v2/index.router"

const indexRouter = express.Router()

indexRouter.use('/v1',homeRouter)
indexRouter.use('/v2',v2Router)

export default indexRouter