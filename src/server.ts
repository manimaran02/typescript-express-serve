import express from 'express';
import {serverConfig} from './config';
import indexRouter from './routers';
import { genericErrorHandler } from './middlewares/error.middleware';

const app = express();


app.use(express.json())
app.use(express.text())

app.use('/api',indexRouter)

app.use(genericErrorHandler)

app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running at http://localhost:${serverConfig.PORT}`)
    console.log("Exit,Press ctrl+c ")
    // console.log(process.env)
})

