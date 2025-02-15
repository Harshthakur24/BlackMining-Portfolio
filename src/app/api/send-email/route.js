import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const POST = async (req) => {
    const body = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const {name, email, message, location, model, number} = body;

    try {
        await resend.emails.send({
            from: 'Black Mining <info@futureconceptdesign.com>',
            to: ['ecoelv4933@gmail.com'],
            subject: 'Contact Form Submission',
            html: `<h2>Black Mining Website Contact Submission Response</h2> 
                   <br /> <h3>Name:</h3> <p>${body.name}</p> 
                   <br /> <h3>Email:</h3> <p>${body.email}</p> 
                   <br /> <h3>Message:</h3> <p>${body.message}</p>
                   <br /> <h3>Location:</h3> <p>${body.location}</p>
                   <br /> <h3>Vehicle Model:</h3> <p>${body.model}</p>
                   <br /> <h3>Vehicle Number:</h3> <p>${body.number}</p>`,
        });

        return NextResponse.json({ message: "Email sent successfully", status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to send email", status: 500 });
    }
};
