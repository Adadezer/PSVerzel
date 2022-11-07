import { Request, Response, Router } from 'express';
import LoginController from '../controllers/loginController';
import { PrismaClient } from '@prisma/client';
import LoginModel from '../models/loginModel';
import LoginService from '../services/loginService';

const router = Router();

const prisma = new PrismaClient();
const loginModel = new LoginModel(prisma);
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);


router.post('/', async (req: Request, res: Response) => {
  loginController.makeLogin(req, res)
});

export default router;