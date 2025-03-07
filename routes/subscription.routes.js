import { Router } from "express";

const subscriptionRoute = Router();

subscriptionRoute.get("/", (req, res) =>
  res.send({ message: "Get all subscriptions" })
);
subscriptionRoute.get("/:id", (req, res) =>
  res.send({ message: "Get subscriptions Detail" })
);
subscriptionRoute.post("/", (req, res) =>
  res.send({ message: "Create subscription" })
);
subscriptionRoute.put("/:id", (req, res) =>
  res.send({ message: "Update subscription" })
);
subscriptionRoute.delete("/:id", (req, res) =>
  res.send({ message: "Delete subscription" })
);
subscriptionRoute.get("/user/:id", (req, res) =>
  res.send({ message: "Get User subscriptions" })
);
subscriptionRoute.put("/:id/cancel", (req, res) =>
  res.send({ message: "Cancel subscription" })
);
subscriptionRoute.put("/:id/cancel", (req, res) =>
  res.send({ message: "Cancel subscription" })
);
subscriptionRoute.get("/upcoming-renewals", (req, res) =>
  res.send({ message: "Get upcoming renewals subscriptions" })
);

export default subscriptionRoute;
