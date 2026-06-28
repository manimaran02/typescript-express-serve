export class AppError implements Error{
    statuscode : number;
    message: string;
    name: string;
    constructor(statuscode : number,message  : string,name:string){
        this.statuscode = statuscode,
        this.name = name,
        this.message = message
    }
}

export class NotFoundError implements AppError{
    name : string;
    message: string;
    statuscode: number; 
    constructor(message : string){
        this.statuscode = 404,
        this.message = message,
        this.name = "NotFoundError"
    }
}


export class NotImplemented implements AppError{
    name : string;
    message: string;
    statuscode: number; 
    constructor(message : string){
        this.statuscode = 500,
        this.message = message,
        this.name = "NotImpleneted"
    }
}