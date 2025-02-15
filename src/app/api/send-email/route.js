import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const POST = async (req) => {
    const body = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: 'Black Mining <info@futureconceptdesign.com>',
            to: ['ecoelv4933@gmail.com'],
            subject: 'Contact Form Submission',
            html: `<h1>Black Mining Website Contact Submission Response</h1> 
                   <br /> <h2>Name:</h2> <p>${body.name}</p> 
                   <br /> <h2>Email:</h2> <p>${body.email}</p> 
                   <br /> <h2>Message:</h2> <p>${body.message}</p>`,
        });

        return NextResponse.json({ message: "Email sent successfully", status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to send email", status: 500 });
    }
};
