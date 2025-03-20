import nodemailer from "nodemailer";
import { EMAIL_PASSWORD } from "./env";

export const accountEmail = "patildipak.u@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
