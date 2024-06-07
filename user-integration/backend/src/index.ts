import express, { ErrorRequestHandler, Request, Response, Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import usersRouter from "./routes/users";
import feedbackRouter from "./routes/feedback";
import treatmentRouter from "./routes/treatment";
import chatRouter from "./routes/chat";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3650;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

app.use(errorHandler);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.use("/feedback", feedbackRouter);
app.use("/treatment", treatmentRouter);
app.use("/chat", chatRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
