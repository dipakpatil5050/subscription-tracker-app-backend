import User from "../models/user.model.js";
import { successResponse } from "../utils/responseHelper.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return successResponse(res, users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      const error = new Error("User not Found");
      error.statusCode = 404;
      throw error;
    }
    return successResponse(res, user, "user detail Fetch Successfully");
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, role } = req.body;

    if (!name || !role) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }

    if (role !== "admin" && role !== "user") {
      const error = new Error("Invalid role");
      error.statusCode = 400;
      throw error;
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        role,
      },
      {
        new: true,
      }
    );
    return successResponse(res, user, "User updated successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    return successResponse(res, user, "User deleted successfully", 200);
  } catch (error) {
    next(error);
  }
};
