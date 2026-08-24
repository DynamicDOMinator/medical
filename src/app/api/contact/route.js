import nodemailer from "nodemailer";
import { clinics } from "@/data/clinics";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      phone,
      email,
      clinicLocation,
      reason,
      contactMethod = "Phone",
      patientType = "New Patient",
      notes = "",
      agreement,
      honeypot, // Anti-bot hidden field
    } = body;

    // Silent reject if bot triggered honeypot
    if (honeypot) {
      return Response.json({ success: true, message: "Request received" });
    }

    // Validation
    if (!firstName || !lastName || !phone || !email) {
      return Response.json(
        { error: "Please fill in all required contact fields (Name, Phone, Email)." },
        { status: 400 }
      );
    }

    // Resolve clinic details
    const selectedClinic = clinics.find((c) => c.id === clinicLocation) || clinics[0];
    const clinicDisplayName = selectedClinic
      ? `${selectedClinic.name} (${selectedClinic.cityStateZip})`
      : clinicLocation || "Not specified";

    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpSecure = process.env.SMTP_SECURE !== "false"; // Default true for 465
    const smtpUser = process.env.SMTP_USER || "almahmoud@tcathewoodlands.com";
    const smtpPass = process.env.SMTP_PASS || "B7j;0oc!s$bm";
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "almahmoud@tcathewoodlands.com";

    // Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 28px 32px; }
          .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 0; font-size: 13px; color: #93c5fd; }
          .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
          .badge-blue { background: #dbeafe; color: #1d4ed8; }
          .badge-green { background: #dcfce7; color: #15803d; }
          .content { padding: 28px 32px; }
          .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; }
          .field-group { margin-bottom: 16px; }
          .field-label { font-size: 12px; color: #64748b; font-weight: 600; margin-bottom: 2px; }
          .field-value { font-size: 15px; color: #0f172a; font-weight: 600; }
          .highlight-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin: 20px 0; }
          .notes-box { background: #fefce8; border-left: 4px solid #eab308; padding: 14px 16px; border-radius: 6px; font-size: 14px; color: #713f12; line-height: 1.5; }
          .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 12px; color: #64748b; text-align: center; }
          .btn-call { display: inline-block; background: #2563eb; color: #ffffff !important; text-decoration: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 700; margin-top: 6px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; color: #60a5fa; display: block; margin-bottom: 4px;">TCA The Woodlands • Website Appointment Request</span>
            <h1>New Appointment Request</h1>
            <p>Submitted via Website Contact Form on ${submissionTime} (CST)</p>
          </div>

          <div class="content">
            <div style="display: flex; gap: 8px; margin-bottom: 20px;">
              <span class="badge badge-blue">${patientType}</span>
              <span class="badge badge-green">Prefers ${contactMethod}</span>
            </div>

            <div class="section-title">Patient Contact Information</div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div class="field-group">
                <div class="field-label">Full Name</div>
                <div class="field-value">${firstName} ${lastName}</div>
              </div>
              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone.replace(/[^0-9+]/g, '')}" style="color: #2563eb; text-decoration: none;">${phone}</a></div>
              </div>
            </div>

            <div class="field-group" style="margin-bottom: 20px;">
              <div class="field-label">Email Address</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
            </div>

            <div class="section-title">Appointment Details</div>

            <div class="highlight-box">
              <div class="field-group" style="margin-bottom: 12px;">
                <div class="field-label">Preferred Location</div>
                <div class="field-value" style="color: #1e40af;">${clinicDisplayName}</div>
              </div>
              <div class="field-group" style="margin-bottom: 0;">
                <div class="field-label">Reason for Appointment</div>
                <div class="field-value">${reason || "Not specified"}</div>
              </div>
            </div>

            ${
              notes && notes.trim()
                ? `
            <div class="section-title">Patient Notes & Medical Background</div>
            <div class="notes-box">
              ${notes.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>")}
            </div>
            `
                : ""
            }

            <div style="margin-top: 24px; text-align: center;">
              <a href="tel:${phone.replace(/[^0-9+]/g, '')}" class="btn-call">📞 Call Patient Directly: ${phone}</a>
            </div>
          </div>

          <div class="footer">
            Dr. Mohamed Faher Almahmoud, MD, FACC | Texas Cardiology Associates<br>
            Reply directly to this email to contact <strong>${firstName} ${lastName}</strong> (<a href="mailto:${email}">${email}</a>).
          </div>
        </div>
      </body>
    </html>
    `;

    const mailOptions = {
      from: `"TCA Appointment Request" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject: `🏥 New Appointment Request: ${firstName} ${lastName} (${selectedClinic?.name || "TCA"})`,
      text: `
New Appointment Request:
----------------------------------------
Patient: ${firstName} ${lastName}
Phone: ${phone}
Email: ${email}
Preferred Clinic: ${clinicDisplayName}
Reason for Appointment: ${reason || "N/A"}
Patient Status: ${patientType}
Preferred Contact Method: ${contactMethod}
Notes: ${notes || "None"}
Submitted: ${submissionTime} (CST)
----------------------------------------
Reply to this email directly to contact ${firstName} ${lastName}.
      `.trim(),
      html: htmlContent,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return Response.json({
      success: true,
      message: "Appointment request sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json(
      {
        error: "Failed to send appointment request. Please try again or call our office directly.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
