import express from "express";
import { PORT } from "./config/env.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import subscritionRoutes from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subscriptions", subscritionRoutes);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to Subscrition Tracker");
});

app.listen(PORT, async () => {
  console.log(`Subscrition Tracker API is running on port ${PORT}`);

  await connectToDatabase();
});

export default app;

// Tutorial watch till 2 hour and 03 Minute till Arcjet implementation
