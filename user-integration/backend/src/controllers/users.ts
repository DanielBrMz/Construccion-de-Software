import { NextFunction, Request, Response } from "express";
import UserModel from "../models/users";

const getAllUsers = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(`Users could not be retrieved because of: ${err}`);
  }
};

const getUserById = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await UserModel.getUserById(id);
    res.json(user);
  } catch (err) {
    res.status(500).send(`User could not be retrieved because of: ${err}`);
  }
};

const createUser = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const userData = req.body;
    const user = await UserModel.createUser(userData);
    res.json(user);
  } catch (err) {
    res.status(500).send(`User could not be created because of: ${err}`);
  }
};

const updateUser = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const user = await UserModel.updateUser(id, userData);
    res.json(user);
  } catch (err) {
    res.status(500).send(`User could not be updated because of: ${err}`);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await UserModel.deleteUser(id);
    res.json(user);
  } catch (err) {
    res.status(500).send(`User could not be deleted because of: ${err}`);
  }
};

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };
