import { resend } from "@/lib/resend"; 
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string, 
    username: string, 
    verifyCode: string,
): Promise<ApiResponse>{
    try {

        await resend.emails.send({
            from: 'onoboarding@resend.dev',
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success: true, message: "Verification Email sent successfully"}

    } catch (emailError) {
        console.error("Error while sending email verification")
        return {success: false, message: "Verification Email Error"}
    }
}
