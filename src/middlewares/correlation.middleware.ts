import { NextFunction, Request ,Response} from 'express';
import { v4 as uuidv4 } from 'uuid';
import { asyncStorage } from '../utils/helpers/request.helpers';

export const attachCorelationIdMiddleware = (req:Request,res:Response, next : NextFunction)=>{

    const correlationId = uuidv4();

    asyncStorage.run({correlationId:correlationId},()=>{
        next();
    })

    // next();
}