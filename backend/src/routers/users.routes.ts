import { Request, Response, Router } from 'express';
import UserController from '../controllers/userController';
import { PrismaClient } from '@prisma/client';
import UserModel from '../models/userModel';
import UserService from '../services/userService';

const router = Router();

const prisma = new PrismaClient();
const userModel = new UserModel(prisma);
const userService = new UserService(userModel);
const userController = new UserController(userService);

router.get('/', async (req: Request, res: Response) => {
  userController.getUsers(req, res)
});

export default router;