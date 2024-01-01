import {z} from "zod";

export const ContactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    phone: z.string().min(1, "Phone is required"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(6, "Message is required"),
})

