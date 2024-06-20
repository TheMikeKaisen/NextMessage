import { z } from "zod";



const usernameValidation = z.
    string()
    .min(5, "Username should be of atleast 5 characters")
    .max(20, "Username can have maximum of 20 characters")
    .regex(/^[a-zA-Z][a-zA-Z0-9_]$/, "Username can contain only letters, numbers of underscores")

export const signUpSchema = z.object({
    username: usernameValidation, 
    email: z.string().email({message: "Please enter a valid email"}), 
    password: z.string().min(6, {message: "minimum 6 characters required"})
})