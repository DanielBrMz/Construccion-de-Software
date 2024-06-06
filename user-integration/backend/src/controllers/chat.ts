import { NextFunction, Request, Response } from "express";
import chatModel from "../models/chat";
import { openai } from "../utils/openai";
import { SYSTEM_PROMPT } from "../constants/ragConstants";


const getRagContext = async (req: Request, res: Response, _next: NextFunction) => {
  const { prompt, rag } = req.body;

  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  const ctx = await chatModel.getRagContext(prompt, rag);

  console.log(ctx);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "system",
        content:
          "[SYSTEM]: Output format will be plain text. Output will not be rendered as HTML or markdown.",
      },
      ...ctx,
      { role: "user", content: prompt },
    ],
  });

  const text = response.choices[0].message.content;

  if (!text) {
    return res.status(500).send("Error generating response");
  }

  return res.json({ answer: text });
};

export default { getRagContext };
