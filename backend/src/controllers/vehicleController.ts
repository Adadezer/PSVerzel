import { Request, Response, NextFunction } from 'express';
import VehicleService from '../services/vehicleService';

export default class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  public async getVehicle(
    _req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const allVehicles = await this.vehicleService.getVehicle();
      
      return res.status(200).json(allVehicles);
    } catch (error) {
      console.error(error);
    }
  }

  public async createVehicle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { brand, name, image, carModel } = req.body;
      const userId = 1;
      const vehicle = { brand, name, image, carModel, userId }

      const createdVehicle = await this.vehicleService.createVehicle(vehicle);

      return res.status(201).json(createdVehicle);
    } catch (error) {
      console.error(error);
    }
  }
}