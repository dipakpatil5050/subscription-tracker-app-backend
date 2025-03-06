import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "get all users" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "get user detail" });
});
userRouter.post("/", (req, res) => {
  res.send({ title: "Create a User " });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update user" });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete user" });
});

export default userRouter;
