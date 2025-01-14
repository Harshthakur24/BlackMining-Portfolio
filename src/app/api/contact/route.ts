import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

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
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Create contact entry
    const contact = await prisma.contact.create({
      data: {
        ownerName,
        phoneNumber,
        email,
        vehicle,
        message,
        formSource,
      },
    })

    // Send email notification
    try {
      await resend.emails.send({
        from: 'Black Mining <onboarding@resend.dev>',
        to: 'thakur2004harsh@gmail.com',
        subject: `New Contact Form Submission - ${formSource}`,
        text: `
          Name: ${ownerName}
          Email: ${email}
          Phone: ${phoneNumber}
          Vehicle: ${vehicle || 'Not provided'}
          Message: ${message || 'Not provided'}
          Source: ${formSource}
        `.trim()
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
    console.error('Contact submission error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to process contact submission' 
    }, { status: 500 })
  }
} 