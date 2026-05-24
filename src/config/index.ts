import dotenv from "dotenv";

type Serverconfig= {
    PORT : Number
}

function loadenv(){
    dotenv.config()

}

loadenv();




export const serverConfig : Serverconfig = {
    PORT : Number(process.env.PORT) || 8080
};
