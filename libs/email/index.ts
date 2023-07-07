import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 25,
//   auth: {
//     user: "434d07a99e7d24",
//     pass: "b683502d205d0c",
//   },
// });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.HOST_EMAIL,
    pass: process.env.HOST_PASSWORD,
  },
});

export const sendVerificationEmail = (
  email: string,
  verificationToken: string
) => {
  console.log("EMAIL", email);
  console.log("verificationToken", verificationToken);

  const mailOptions = {
    from: process.env.HOST_EMAIL,
    to: email,
    subject: "Email Verification",
    text: `Click the following link to verify your email: ${process.env.BASE_URL}/verifyEmail?token=${verificationToken}&email=${email}`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error("Error sending verification email:", error);
    }
  });
};
