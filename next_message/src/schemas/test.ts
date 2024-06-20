import { z } from "zod"; 


// validating username separately
const usernameValidation = z.
    string() //ensures username is string
    .min(5) // minimum 5 characters
    .max(20, "limit exceeded") // max 20 characters and provides error if failed
    .regex(/^[a-zA-Z][a-zA-Z0-9_]$/)  // you can also check regex

export const signUpSchema = z.object({
    username: usernameValidation, 
    email: z.string().email({message: "Please enter a valid email"}), 
    password: z.string().min(6, {message: "minimum 6 characters required"}),
    age: z.number()
})