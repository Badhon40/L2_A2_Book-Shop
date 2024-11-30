import express, { Request, Response } from 'express'

const app=express()
app.use(express.json())

app.get('/',(req: Request, res: Response)=>{
    res.send({
        status: true,
        message: ' server is running'
    })
})

export default app;