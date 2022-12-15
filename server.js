import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// CONFIG ENVIRONMENT //
dotenv.config();
const app = express();
const port = process.env.APP_PORT || 9001;

app.listen(port).on("listening", () => {
  console.log(`API server started on port : ${port}`);
});

app.get("/", (_, res) => {
  res.status(200).json({
    code: 200,
    message: "API running successfully",
    commit_id: process.env.CI_COMMIT,
  });
});

const corsOptions = {
  exposedHeaders: ["Authorization", "App-Control"],
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use((req, res, next) => {
  res.status(404).send({
    code: "02",
    error: "Not Found",
  });
});
 
