import UserModel from "../models/userModel";
import IUser from "../interfaces/IUser";

export default class UserService {
  constructor(private userModel: UserModel) {}

  public async getUsers(): Promise<IUser[] | []> {
    const allUsers = await this.userModel.getUsers();
    return allUsers;
  } 
}