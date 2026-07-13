export class AppError implements Error{
    statuscode : number;
    message: string;
    name: string;
    
    constructor(statuscode : number,message  : string,name:string){
        this.statuscode = statuscode || 400,
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

export class InternalServer implements AppError{
    name : string;
    message: string;
    statuscode: number;
    constructor(message : string){
        this.statuscode = 500,
        this.message = message,
        this.name = "InternalServe"

    }
}

export class BadRequest implements AppError{
    statuscode: number;
    message: string;
    name: string;
    constructor(message : string){
        this.statuscode = 400,
        this.message = message,
        this.name = "Bad Request"
    }
}