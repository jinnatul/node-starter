import nodemailer from "nodemailer";

const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const SendEmail = async (email, subject, message) => {
  console.log("mail info", {
    email,
    subject,
  });
  await Transporter.sendMail({
    from: `<${process.env.EMAIL}>`,
    to: email,
    subject,
    html: message,
  });
};

export default SendEmail;
