import express from 'express';

const app = express();
const PORT:number = 3000

app.get('/',(req,res)=>{
    res.send("Manimaran SDE @Amazon")
})


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

