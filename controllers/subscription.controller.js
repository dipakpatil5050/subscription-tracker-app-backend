import { SERVER_URL } from "../config/env.js";
import { workFlowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.model.js";
import { successResponse } from "../utils/responseHelper.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const { workflowRunId } = await workFlowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        "content-type": "application/json",
      },
      retries: 0,
    });
    return successResponse(
      res,
      { subscription, workflowRunId },
      "Subscription created successfully",
      201
    );
  } catch (error) {
    next(error);
  }
};

export const getUserSubscription = async (req, res, next) => {
  try {
    if (req.user.id != req.params.id) {
      const error = new Error("You are not Owner of this Account");
      error.status = 401;
      throw error;
    }
    const subscription = await Subscription.find({ user: req.params.id });

    return successResponse(res, subscription, "Fetch Subscriptions", 200);
  } catch (error) {
    next(error);
  }
};
