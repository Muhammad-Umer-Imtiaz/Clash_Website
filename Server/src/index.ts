import express, { Application, Request, Response } from 'express'
import './Jobs/index.js'
import 'dotenv/config'
import { sendMail } from './Config/mail.js';
import { emailQueue, emailQueueName } from './Jobs/emailJob.js';

const app: Application = express();

const PORT =process.env.PORT|| 3000;

app.get('/', (req: Request, res: Response) => { 
    return res.send("Backend is running Successfull")
})

app.get('/send', async (req: Request, res: Response) => { 
    await emailQueue.add(emailQueueName,{ 
        to:'opsunny664@gmail.com',
        subject:"testing 2 Email",
        html:"Hello Testing 2 Email From Me"
    })
    return res.send("Backend is running Successfull")
})
app.listen(PORT, () => console.log(`App is Running on Port ${PORT}`))