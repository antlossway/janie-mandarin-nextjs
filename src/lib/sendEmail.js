import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export default async function sendEmail(data) {
    const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)

    return await transporter.sendMail({
        ...data
    })
}