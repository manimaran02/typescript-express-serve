import express from 'express';
import {serverConfig} from './config';
import indexRouter from './routers';
import { genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorelationIdMiddleware } from './middlewares/correlation.middleware';


const app = express();
app.use(express.json())
app.use(express.text())



app.use(attachCorelationIdMiddleware)

app.use('/api',indexRouter)

app.use(genericErrorHandler)

app.listen(serverConfig.PORT,()=>{
    logger.info(`Server is running at http://localhost:${serverConfig.PORT}`)
    logger.info("Exit ctrl+c",{name : "Dev Server"} )
    // console.log(process.env)
})

