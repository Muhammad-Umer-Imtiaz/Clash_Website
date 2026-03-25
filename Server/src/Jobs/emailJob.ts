import { Job, Queue, Worker } from "bullmq";
import { defaultQueueOptions, redisConnection } from "../Config/queue.js";
import { sendMail } from "../Config/mail.js";

interface EmailJobDataType{
    to: string,
    subject: string,
    html: string
}

export const emailQueueName= "emailQueue";

export const emailQueue= new Queue(emailQueueName,{
    connection: redisConnection,
    defaultJobOptions: defaultQueueOptions
})

export const queueWorker=new Worker(emailQueueName,async(job:Job)=>{
    const data:EmailJobDataType=job.data
    console.log("first",data)
 try {
        await sendMail(data.to, data.subject, data.html);
    } catch (error) {
        console.error("Email sending failed:", error);
        throw error; // important so BullMQ marks job as failed
    }},{
    connection:redisConnection
})