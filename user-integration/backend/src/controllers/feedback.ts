import { NextFunction, Request, Response } from "express";
import feedbackModel from "../models/feedback";

const getFeedbackById = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const { id } = req.params;
    const feedback = await feedbackModel.getFeedbackById(parseInt(id));
    res.json(feedback);
  } catch (err) {
    res
      .status(500)
      .send(`Feedback could not be retrieved because of: ${err}`);
  }
};

const createFeedback = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const { user_id } = req.params;
    const { feedback } = req.body;
    const newFeedback = await feedbackModel.createFeedback(feedback, parseInt(user_id));
    res.json(newFeedback);
  } catch (err) {
    res.status(500).send(`Feedback could not be created because of: ${err}`);
  }
};

export default { getFeedbackById, createFeedback };
