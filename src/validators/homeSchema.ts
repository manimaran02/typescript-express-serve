import {z} from "zod";

export const homeSchema = z.object({
    name : z.string().min(1),
    age : z.number().positive()
})