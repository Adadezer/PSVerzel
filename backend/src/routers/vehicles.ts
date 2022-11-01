import { NextFunction, Request, Response, Router } from 'express';
import VehicleController from '../controllers/vehicleController';
import { PrismaClient } from '@prisma/client';
import VehicleModel from '../models/vehicleModel';
import VehicleService from '../services/vehicleService';

const router = Router();

const prisma = new PrismaClient();
const vehicleModel = new VehicleModel(prisma);
const vehicleService = new VehicleService(vehicleModel);
const vehicleController = new VehicleController(vehicleService);

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  vehicleController.getVehicle(req, res, next)
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  vehicleController.createVehicle(req, res, next)
});

export default router;