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

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await UserModel.getUserById(id);
    res.json(user);
  } catch (err) {
    res.status(500).send(`User could not be retrieved because of: ${err}`);
  }
}

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export default {getAllUsers, getUserById, createUser};
