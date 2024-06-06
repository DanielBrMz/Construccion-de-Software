import { NextFunction, Request, Response } from "express";
import DescriptionModel from "../models/description";

const getDescriptionByid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const description = await DescriptionModel.getDescriptionByid(parseInt(id));
    res.json(description);
  } catch (err) {
    res
      .status(500)
      .send(`Description could not be retrieved because of: ${err}`);
  }
};

const createDescription = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id } = req.params;
    const { description } = req.body;
    const newDescription = await DescriptionModel.createDescription(
      description,
      user_id
    );
    res.json(newDescription);
  } catch (err) {
    res.status(500).send(`Description could not be created because of: ${err}`);
  }
};

export default { getDescriptionByid, createDescription };
