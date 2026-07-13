import {createLogger,format, transports} from "winston";
import { getCorrelationId } from "../utils/helpers/request.helpers";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = createLogger({
    format : format.combine(
        format.timestamp({format : "MM-DD-YYYY HH:mm:ss"}),
        format.json(),
        format.prettyPrint(),
        format.printf(({level,message,timestamp,...data})=>{
                const output = {level,message,timestamp,correlatioId : getCorrelationId,...data}
                return JSON.stringify(output)
        })
    ),
    transports : [
        new transports.Console(),
        new DailyRotateFile({
            filename: "src/logs/application-%DATE%.log",
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ]

})


export default logger