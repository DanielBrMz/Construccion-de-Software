import { NextFunction, Request, Response } from "express";
import sql from "../config/db";
import UserModel from "../models/userModel";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(`Users could not be retrieved because of: ${err}`);
  }
};

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export default {getAllUsers, createUser};
