import dotenv from "dotenv";

type Serverconfig= {
    PORT : Number
}

dotenv.config()




export const serverConfig : Serverconfig = {
    PORT : Number(process.env.PORT) || 8080
};
