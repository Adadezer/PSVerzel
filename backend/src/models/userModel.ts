import { PrismaClient, User } from "@prisma/client";

export default class UserModel {
  constructor(private orm: PrismaClient) {}

  public async getUsers(): Promise<User[] | []> {
    const allUsers = await this.orm.user.findMany();
    return allUsers;
  }
}