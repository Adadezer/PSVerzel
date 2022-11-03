import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class getUsers {
  constructor(private userService: UserService) {}

  public async getUsers(
    _req: Request,
    res: Response,
  ): Promise<Response | void> {
    try {
      const allUsers = await this.userService.getUsers();
      return res.status(200).json(allUsers);
    } catch (error) {
      console.log(error);
    }
  }
}