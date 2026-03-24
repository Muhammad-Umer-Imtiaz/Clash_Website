import express, { Application, Request, Response } from 'express'

import 'dotenv/config'
import { sendMail } from './Config/mail.js';

const app: Application = express();

const PORT =process.env.PORT|| 3000;

app.get('/', (req: Request, res: Response) => { 
    return res.send("Backend is running Successfull")
})

app.get('/send',(req: Request, res: Response) => { 
    sendMail('opsunny664@gmail.com',"testing Email","Hello Testing Email From Me")
    return res.send("Backend is running Successfull")
})
app.listen(PORT, () => console.log(`App is Running on Port ${PORT}`))