import express from "express";
import chatController from "../controllers/chat";

const chatRouter: express.Router = express.Router();
chatRouter.post("/", chatController.getRagContext);

export default chatRouter;
