"use server";

import {z} from "zod";
import {render} from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "@/emails/contact-form-email";
import { ContactFormSchema } from "@/lib/schema";


type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data);
   
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "khadetou96@gmail.com",
            pass: "bjcjnteiybkdnnsl",
        },
    });
    

    const emailHtml = render(Email({url:"https://example.com"}));

   

    if(result.success){
        const {email, name, subject, message, phone} = result.data;
        const options ={
            from: email,
            to: "hotcodesagency@gmail.com",
            subject: subject,
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