import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import ContactFormEmail from '../../../emails/ContactFormEmail';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { ownerName, phoneNumber, email, vehicle, message, formSource } = body;

        // Validate required fields
        if (!ownerName || !phoneNumber || !email) {
            return NextResponse.json(
                { error: 'Required fields are missing' },
                { status: 400 }
            );
        }

        // Create contact entry
        const contact = await prisma.contact.create({
            data: {
                ownerName,
                phoneNumber,
                email,
                vehicle,
                message,
                formSource
            }
        });

        // Send email notification
        await resend.emails.send({
            from: 'Black Mining <onboarding@resend.dev>',
            to: 'thakur2004harsh@gmail.com',
            subject: `New Contact Form Submission - ${formSource}`,
            react: ContactFormEmail({ 
                formData: { 
                    ownerName, 
                    email, 
                    phoneNumber, 
                    vehicle, 
                    message, 
                    formSource 
                } 
            })
        });

        return NextResponse.json(contact, { status: 201 });

    } catch (error) {
        console.error('Contact submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 