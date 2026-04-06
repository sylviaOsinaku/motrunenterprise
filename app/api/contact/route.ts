import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, phone, business, productInterest, quantity, message } = body

    // Basic validation
    if (!name || !phone || !productInterest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Send a WhatsApp message
    // 4. Log the inquiry

    console.log('Contact form submission:', {
      name,
      phone,
      business,
      productInterest,
      quantity,
      message,
      timestamp: new Date().toISOString(),
    })

    // For now, we'll just simulate a successful submission
    // In production, you would integrate with your backend services

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been received. We will contact you shortly.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
