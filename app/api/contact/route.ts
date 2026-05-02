import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Pastikan environment variables tersedia
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variable");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`, // Dikirim dari akun aplikasi tapi memakai nama pengirim
      to: user, // Email Anda sebagai penerima
      replyTo: email, // Jika Anda membalas, akan membalas ke email pengirim
      subject: `Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4f46e5;">Pesan Baru dari Portfolio</h2>
          <p><strong>Nama Pengirim:</strong> ${name}</p>
          <p><strong>Email Pengirim:</strong> ${email}</p>
          <p><strong>Subjek:</strong> ${subject}</p>
          <hr />
          <h3>Pesan:</h3>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
