const Mailjet = require("node-mailjet");

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "ganesh@sequoiaie.com";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "ganesh@sequoiaie.com";
const SENDER_NAME = process.env.SENDER_NAME || "Sequoia Enterprises";

function escapeHtml(text) {
  if (!text || typeof text !== "string") return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  // Support both our names and Mailjet's docs: MJ_APIKEY_PUBLIC / MJ_APIKEY_PRIVATE
  const apiKey = process.env.MAILJET_API_KEY || process.env.MJ_APIKEY_PUBLIC;
  const secretKey = process.env.MAILJET_SECRET_KEY || process.env.MJ_APIKEY_PRIVATE;

  if (!apiKey || !secretKey) {
    console.error("Contact API: MAILJET_API_KEY or MAILJET_SECRET_KEY is not set");
    return res.status(503).json({
      success: false,
      message: "Email service is not configured. Please email us directly at ganesh@sequoiaie.com",
    });
  }

  const { name, email, message } = req.body || {};
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please fill in name, email, and message.",
    });
  }

  const mailjet = Mailjet.apiConnect(apiKey, secretKey);

  const safeName = escapeHtml(name.trim());
  const safeEmail = email.trim();
  const safeMessage = escapeHtml(message.trim());

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: { Email: SENDER_EMAIL, Name: SENDER_NAME },
        To: [{ Email: CONTACT_EMAIL, Name: "Sequoia Enterprises" }],
        ReplyTo: { Email: safeEmail, Name: name.trim() },
        Subject: `Sequoia Enterprises inquiry from ${name.trim()}`,
        TextPart: `${name.trim()} (${safeEmail}) wrote:\n\n${message.trim()}`,
        HTMLPart: `<p><strong>${safeName}</strong> (${escapeHtml(safeEmail)}) wrote:</p><p>${safeMessage.replace(/\n/g, "<br>")}</p>`,
      },
    ],
  });

  try {
    await request;
    return res.status(200).json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Contact API Mailjet error:", err?.statusCode, err?.response?.body || err.message);
    const code = err?.statusCode || 500;
    const isAuth = code === 401 || code === 403;
    return res.status(code).json({
      success: false,
      message: isAuth
        ? "Email service configuration error. Please email us directly at ganesh@sequoiaie.com"
        : "Message could not be sent. Please try again or email ganesh@sequoiaie.com",
    });
  }
}
