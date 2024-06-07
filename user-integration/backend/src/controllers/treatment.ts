import { NextFunction, Request, Response } from "express";
import TreatmentModel from "../models/treatment";

const getTreatmentByid = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const { id } = req.params;
    const description = await TreatmentModel.getTreatmentByid(parseInt(id));
    res.json(description);
  } catch (err) {
    res
      .status(500)
      .send(`Treatment could not be retrieved because of: ${err}`);
  }
};

const createTreatment = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const { user_id } = req.params;
    const { description, prescription } = req.body;
    const newDescription = await TreatmentModel.createTreatment(
      description,
      prescription,
      parseInt(user_id)
    );
    res.json(newDescription);
  } catch (err) {
    res.status(500).send(`Treatment could not be created because of: ${err}`);
  }
};

export default { getTreatmentByid, createTreatment };
