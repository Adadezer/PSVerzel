import { PrismaClient, Vehicles } from "@prisma/client";
import { IVehicle, IResponseVehicle } from "../interfaces/IVehicles";

export default class VehicleModel {
  constructor(private orm: PrismaClient) {}

  public async getVehicle(): Promise<Vehicles[] | []> {
    const allVehicles = await this.orm.vehicles.findMany();
    return allVehicles;
  }

  public async createVehicle(vehicle: IVehicle): Promise<IResponseVehicle> {
    const createdVehicle = await this.orm.vehicles.create({
      data: {
        brand: vehicle.brand,  
        name: vehicle.name,
        image: vehicle.image,
        carModel: vehicle.carModel,
        userId: vehicle.userId
      }
    });
    return createdVehicle
  }
}