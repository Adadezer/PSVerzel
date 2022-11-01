import VehicleModel from '../models/vehicleModel';
import { IResponseVehicle, IVehicle } from '../interfaces/IVehicles';

export default class VehicleService {
  constructor (private vehicleModel: VehicleModel) {}

  public async getVehicle(): Promise<IVehicle[] | []> {
    const allVehicles = await this.vehicleModel.getVehicle();
    return allVehicles;
  }

  public async createVehicle(vehicle: IVehicle): Promise<IResponseVehicle> {
    const createdVehicle = await this.vehicleModel.createVehicle(vehicle);
    return createdVehicle;
  }
}