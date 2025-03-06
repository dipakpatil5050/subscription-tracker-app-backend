import { Router } from "express";

const subscriptionRoute = Router();

subscriptionRoute.get("/", (req, res) =>
  res.send({ message: "Get all subscriptions" })
);

export default subscriptionRoute;
