import nodemailer from "nodemailer";
import { EMAIL_PASSWORD } from "./env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "patildipak.u@gmail.com",
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;
