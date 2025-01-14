import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import ContactFormEmail from '../../../emails/ContactFormEmail'

// Prevent multiple instances in development
declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { ownerName, phoneNumber, email, vehicle, message, formSource = 'website' } = body

    // Validate required fields
    if (!ownerName || !phoneNumber || !email) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Create contact in database
    const contact = await prisma.contact.create({
      data: {
        ownerName,
        phoneNumber,
        email,
        vehicle: vehicle || undefined,
        message: message || undefined,
        formSource,
      },
    })

    // Send email notification
    try {
      await resend.emails.send({
        from: 'Black Mining <onboarding@resend.dev>',
        to: 'thakur2004harsh@gmail.com', // Your email address
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
      })
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue even if email fails
    }

    return NextResponse.json({ 
      success: true, 
      data: contact 
    })

  } catch (error) {
    console.error('Request error', error)
    return NextResponse.json({ error: 'Error creating contact' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
} 