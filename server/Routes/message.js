import express from "express";
import mongoose from "mongoose";

import Message from "../schemas/message.js";

const router = express.Router();

router.post("/new-message", async (req, res) => {
  const message = req.body;

  try {
    let newMessage = new Message({
      ...message,
      timestamp: new Date().toISOString(),
    });
    await newMessage.save();

    res.status(201).json(Message);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export default router;
