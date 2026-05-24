import express from 'express';
import {serverConfig} from './config';
import indexRouter from './routers';

const app = express();
app.use(express.json())
app.use(express.text())
app.use('/api',indexRouter)


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running at http://localhost:${serverConfig.PORT}`)
    console.log("Exit,Press ctrl+c ")
    // console.log(process.env)
})

