import { PrismaClient, User } from "@prisma/client";
import IUser from "../interfaces/IUser";


export default class LoginModel {
  constructor(private orm: PrismaClient) {}

  public async makeLogin(login: IUser): Promise<User | []> {
    const result = await this.orm.user.findUnique({ where: {username: login.username} });

    if (!result) return [];

    return result;
  }
}