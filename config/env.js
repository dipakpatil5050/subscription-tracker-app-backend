import { config } from "dotenv";

/*eslint no-process-env: "error"*/
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRED_IN,
  ARCJET_KEY,
  ARCJET_ENV,
} = process.env;
 