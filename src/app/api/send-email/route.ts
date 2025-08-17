import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message } = await request.json();

    // For now, we'll simulate email sending
    // In production, you would integrate with a real email service
    // like SendGrid, Mailgun, or use a service like EmailJS
    
    console.log('Email would be sent to:', to);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      details: {
        to,
        subject,
        message
      }
    });

  } catch (error) {
    console.error('Error in send-email API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
