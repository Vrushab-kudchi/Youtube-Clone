import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from "./Routes/user.js";
import videoRoute from "./Routes/video.js";
import commentsRoutes from "./Routes/comments.js";
import morgan from "morgan";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads", express.static(path.join("uploads")));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/video", videoRoute);
app.use("/comment", commentsRoutes);
app.use("uploads", express.static(path.join("uploads")));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const connect_url = process.env.CONNECT_URL;

mongoose
  .connect(connect_url)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });
