import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private loginService: LoginService) {}

  public async makeLogin(
    req: Request,
    res: Response,
  ): Promise<Response | void> {
    try {
      const { username, password } = req.body;
      const login = await this.loginService.makeLogin({ username, password });
      return res.status(200).json(login);
    } catch (error) {
      console.log(error);
    }
  }
}