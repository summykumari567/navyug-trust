# Email Setup Guide for Navyug Website

## 🚨 Current Status
The website currently **simulates** email sending but does NOT send actual emails to `summy360plus@gmail.com`.

## 🔧 Solution Options

### Option 1: EmailJS (Recommended for beginners)

#### Step 1: Sign up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account
3. Verify your email

#### Step 2: Set up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook"
4. Connect your email account (this will be the sender)
5. Copy the **Service ID**

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** {{subject}}

**Message:**
{{message}}

**From:** {{from_name}} ({{reply_to}})

4. Copy the **Template ID**

#### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

#### Step 5: Update Code
Replace these values in `src/app/page.tsx`:
```typescript
const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with actual Service ID
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with actual Template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with actual Public Key
```

#### Step 6: Enable Real Email Sending
Uncomment this code in `src/app/page.tsx`:
```typescript
try {
  await emailjs.send(serviceId, templateId, templateParams, publicKey);
  console.log('Email sent successfully via EmailJS');
} catch (emailError) {
  console.error('EmailJS error:', emailError);
  throw new Error('Failed to send email');
}
```

### Option 2: SendGrid (More professional)

#### Step 1: Sign up for SendGrid
1. Go to [https://sendgrid.com/](https://sendgrid.com/)
2. Create a free account (100 emails/day free)
3. Verify your domain or email

#### Step 2: Get API Key
1. Go to Settings → API Keys
2. Create a new API Key
3. Copy the key

#### Step 3: Update Code
Replace the EmailJS code with SendGrid implementation.

### Option 3: Gmail SMTP (Free but limited)

#### Step 1: Enable 2-Factor Authentication on Gmail
#### Step 2: Generate App Password
#### Step 3: Use Nodemailer with Gmail SMTP

## 🧪 Testing

After setup:
1. Fill out the contact form
2. Click "Send Message"
3. Check `summy360plus@gmail.com` for the email
4. Check browser console for success/error messages

## 💰 Costs

- **EmailJS**: Free tier (200 emails/month), then $15/month
- **SendGrid**: Free tier (100 emails/day), then $15/month
- **Gmail SMTP**: Free but limited to 500 emails/day

## 🆘 Need Help?

If you need assistance setting up any of these services, let me know and I can provide more detailed steps for your preferred option.

## ⚠️ Important Notes

1. **Never commit API keys to Git** - use environment variables
2. **Test thoroughly** before going live
3. **Monitor email delivery** and spam folder
4. **Backup your configuration**
