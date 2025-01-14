import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

// Prevent multiple instances in development
declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

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

    return NextResponse.json(contact)
  } catch (error) {
    console.error('Request error', error)
    return NextResponse.json({ error: 'Error creating contact' }, { status: 500 })
  }
} 