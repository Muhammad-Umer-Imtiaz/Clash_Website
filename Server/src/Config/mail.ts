import nodemailer from 'nodemailer'



export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
  //   logger: true,
  // debug: true,
});


export const sendMail = async (to: string, subject: string, html: string) => {
  debugger
  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html,
  });
  console.log("Email send Successfully")

  // console.log("Message sent:", info.messageId);
};