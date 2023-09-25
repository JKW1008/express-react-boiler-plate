import express from "express";
import {
  loginSuccess,
  postJoin,
  postLogin,
} from "../controllers/userControllers.js";

const userRouter = express.Router();
userRouter.post("/signup", postJoin);
userRouter.post("/signin", postLogin);
userRouter.get("/signin/success", loginSuccess);

export default userRouter;
