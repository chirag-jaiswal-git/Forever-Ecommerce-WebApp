import express from "express";

import {
  addToCart,
  getCart,
  updateCart,
} from "../controllers/cartController.js";

import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/test", (req, res) => {
  res.json({
    success: true,
    message: "Cart router is working",
  });
});

cartRouter.post("/get", authUser, getCart);

cartRouter.post("/add", authUser, addToCart);

cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
