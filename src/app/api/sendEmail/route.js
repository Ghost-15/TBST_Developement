import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    const { name, email, subject, message } = await request.json();

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'tatibatchi15@gmail.com',
                pass: 'bbvxpdtycblofjeo'
            }
        })

        const mailOption = {
            from: email,
            to: 'tatibatchi15@gmail.com',
            html: `
                <h3>Message From ${name}</h3>
                <li> email: ${email}</li>
                <li> title: ${subject}</li>
                <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}