import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, requirement, details } = await req.json();

    // Namecheap Private Email SMTP Settings
    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Perfect Tech Web" <${process.env.EMAIL_USER}>`,
      to: "sales@perfecttech.store",
      replyTo: email, // Allows you to click 'Reply' in your inbox to email the customer
      subject: `New Quote Request: ${requirement} from ${company}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRequirement: ${requirement}\nDetails: ${details}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #F2A93B;">New Quotation Request</h2>
          <hr border="none" style="border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Requirement:</strong> ${requirement}</p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            <strong>Details:</strong><br/>${details}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}