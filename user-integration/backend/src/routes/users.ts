import express from "express";
import userControllers from "../controllers/userControllers";

const router = express.Router();

router.get('/', userControllers.getAllUsers);

export default router;