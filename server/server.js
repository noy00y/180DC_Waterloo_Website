import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import messageRouter from "./Routes/message.js";

// App Config
const app = express();
const PORT = process.env.PORT || 5000;

// MiddleWare
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ extended: false }));

// DB Config

const connection_url = process.env.MONGO_URI;

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/message", messageRouter);

// App Listeing
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
