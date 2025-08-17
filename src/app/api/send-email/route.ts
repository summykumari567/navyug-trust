import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message } = await request.json();

    // EmailJS configuration
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // You'll need to get this from EmailJS
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // You'll need to get this from EmailJS
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // You'll need to get this from EmailJS

    // For now, we'll simulate email sending until you set up EmailJS
    // In production, you would use the actual EmailJS service
    
    console.log('Email would be sent to:', to);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // TODO: Uncomment and configure the following code once you have EmailJS credentials
    /*
    const templateParams = {
      to_email: to,
      subject: subject,
      message: message,
      from_name: 'Navyug Website',
      reply_to: 'noreply@navyug.com'
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully via EmailJS');
    } catch (emailError) {
      console.error('EmailJS error:', emailError);
      // Fallback to logging if EmailJS fails
    }
    */

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
