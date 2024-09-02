import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, text, token } = await req.json();

    const recaptchaVerification = await verifyRecaptchaToken(token);
    if (!recaptchaVerification.success) {
      console.error("reCAPTCHA verification failed", recaptchaVerification);
      return new Response(
        JSON.stringify({
          success: false,
          error: "reCAPTCHA verification failed",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailInfo = await sendEmail({ name, email, phone, text });

    return new Response(
      JSON.stringify({ message: "Email sent successfully", info: emailInfo }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error handling POST request:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

async function verifyRecaptchaToken(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verifyUrl, { method: "POST" });
  const data = await response.json();

  return data;
}

async function sendEmail({
  name,
  email,
  phone,
  text,
}: {
  name: string;
  email: string;
  phone: string;
  text: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "",
    port: parseInt(process.env.SMTP_PORT || ""),
    secure: process.env.SMTP_PORT == '465' ? true : false,
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  });

  const message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Us</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; background-color: #4CAF50; color: white; padding: 10px 0; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Contact Us</h1>
        </div>
        <div style="padding: 20px; line-height: 1.6;">
          <h2 style="font-size: 20px; margin-bottom: 10px; color: #4CAF50;">Hello,</h2>
          <p>You have received a new message from the contact form on your website.</p>
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
          <p style="margin-bottom: 10px;">${text}</p>
        </div>
        <div style="text-align: center; font-size: 14px; color: #777; padding: 20px 0 0; border-top: 1px solid #e4e4e4; margin-top: 20px;">
          <p>This email was sent from BLYMO LTD website's contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return transporter.sendMail({
    from: `${name} <${process.env.BLYMO_SUPPORT_EMAIL}>`,
    to: process.env.BLYMO_SUPPORT_EMAIL,
    subject: `Get in touch by ${name}`,
    html: message,
    replyTo: email,
  });
}
