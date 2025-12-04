import express from "express";
import transporter from "../utils/GmailTransporter.js";
const router = express.Router();

router.post("/admin", async (req, res) => {
  const { username, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New message from ${username}`,
      text: `
        Name: ${username}
        Email: ${email}
        Message:
        ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
