import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body || {};

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          error:
            "Name, contact email, contact phone, and message are required.",
        },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "customer@pagapay.mx";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Pagapay Website <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add RESEND_API_KEY in environment variables.",
        },
        { status: 500 },
      );
    }

    const text = [
      "New contact request from Pagapay website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <h2>New contact request from Pagapay website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br />")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New contact request - ${name}`,
        html,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const serviceError = await resendResponse.text();
      return NextResponse.json(
        { error: `Email provider error: ${serviceError}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while sending email." },
      { status: 500 },
    );
  }
}
