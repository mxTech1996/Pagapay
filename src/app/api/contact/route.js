import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_EMAIL_REGEX =
  /^(?:[^<>\r\n]+<[^<>\s@]+@[^<>\s@]+\.[^<>\s@]+>|[^<>\s@]+@[^<>\s@]+\.[^<>\s@]+)$/;

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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
    const toEmail = String(process.env.CONTACT_TO_EMAIL || "").trim();
    const rawFromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Pagapay Website <onboarding@resend.dev>";
    const normalizedFromEmail = String(rawFromEmail)
      .trim()
      .replace(/^['"]|['"]$/g, "");
    const fromEmail = FROM_EMAIL_REGEX.test(normalizedFromEmail)
      ? normalizedFromEmail
      : "Pagapay Website <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add RESEND_API_KEY in environment variables.",
        },
        { status: 500 },
      );
    }

    if (!toEmail || !EMAIL_REGEX.test(toEmail)) {
      return NextResponse.json(
        {
          error:
            "Destination email is not configured. Set a valid CONTACT_TO_EMAIL in environment variables.",
        },
        { status: 500 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const text = [
      "PAGAPAY · New contact request",
      "----------------------------------------",
      `Submitted at: ${submittedAt}`,
      `Name: ${name}`,
      `User contact email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Message:",
      message,
      "----------------------------------------",
      "Tip: Reply directly to this email to contact the lead.",
    ].join("\n");

    const html = `
      <div style="margin:0;padding:24px;background:#f3f6fb;font-family:Arial,sans-serif;color:#0f2942;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dbe5f2;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:20px 24px;background:linear-gradient(120deg,#0b2242,#136b74);color:#ffffff;">
              <p style="margin:0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.9;">Pagapay</p>
              <h1 style="margin:8px 0 0 0;font-size:22px;line-height:1.3;">New Contact Request</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 8px 24px;">
              <p style="margin:0 0 8px 0;font-size:13px;color:#5b728f;">Submitted at: ${escapeHtml(submittedAt)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 16px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid #e3ebf5;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:12px 14px;background:#f8fbff;font-size:12px;font-weight:700;color:#6a819d;width:35%;">Name</td>
                  <td style="padding:12px 14px;font-size:14px;color:#132e4a;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fbff;font-size:12px;font-weight:700;color:#6a819d;">User contact email</td>
                  <td style="padding:12px 14px;font-size:14px;color:#132e4a;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fbff;font-size:12px;font-weight:700;color:#6a819d;">Company</td>
                  <td style="padding:12px 14px;font-size:14px;color:#132e4a;">${safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding:12px 14px;background:#f8fbff;font-size:12px;font-weight:700;color:#6a819d;">Phone</td>
                  <td style="padding:12px 14px;font-size:14px;color:#132e4a;">${safePhone}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 24px 24px;">
              <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6a819d;font-weight:700;">Message</p>
              <div style="padding:14px;border:1px solid #e3ebf5;border-radius:12px;background:#fbfdff;font-size:14px;line-height:1.6;color:#16324f;">${safeMessage}</div>
              <p style="margin:12px 0 0 0;font-size:12px;color:#6a819d;">Tip: reply directly to this email to contact the lead.</p>
            </td>
          </tr>
        </table>
      </div>
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
