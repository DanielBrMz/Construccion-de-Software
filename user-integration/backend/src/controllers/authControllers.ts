import { NextFunction, Request, Response } from "express";
import sql from "../config/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import authModel from "../models/authModel";

const signup = async (req: Request, res: Response, next: NextFunction) => {

};

const login = async (req: Request, res: Response, next: NextFunction) => {

};

export default { signup, login };