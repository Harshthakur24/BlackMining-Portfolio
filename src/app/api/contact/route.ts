import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      ownerName, 
      phoneNumber, 
      email, 
      vehicle, 
      message,
      formSource = 'website'  
    } = body

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