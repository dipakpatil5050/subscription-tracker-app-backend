import express from "express";
import { PORT } from "./config/env.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import subscritionRoutes from "./routes/subscription.routes.js";

const app = express();
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/subscriptions", subscritionRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Subscrition Tracker");
});

app.listen(PORT, () => {
  console.log(`Subscrition Tracker API is running on port ${PORT}`);
});

export default app;
