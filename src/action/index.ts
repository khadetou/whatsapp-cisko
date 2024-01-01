"use server";

import {z} from "zod";
import {render} from "@react-email/render";
import nodemailer from "nodemailer";
import { ContactEmail } from "@/emails/contact-form-email";
import { ContactFormSchema } from "@/lib/schema";


type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data);
   
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    });
    

   

   

    if(result.success){
        const {email, name, subject, message, phone} = result.data;
        const emailHtml = render(ContactEmail({data: result.data}));
        const options ={
            from: process.env.EMAIL,
            to: process.env.EMAIL_RECEIVER,
            subject: `Message envoyé part de ${name} email: ${email} | ${subject}`,
            html: emailHtml
        }
        try {
            const data =   await transporter.sendMail(options);
            return {success: true, data}
           } catch (error) {
               return {success: false, error}
           }
    }

    if(result.error){
        return {sucess: false, error: result.error.format()}
    }

}