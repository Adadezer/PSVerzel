import LoginModel from "../models/loginModel";
import IUser from "../interfaces/IUser";
import Jwt from "jsonwebtoken";
import fs from 'fs';

export default class LoginService {
  constructor(private loginModel: LoginModel) {}

  public async makeLogin(login: IUser): Promise<Object> {
    const result = await this.loginModel.makeLogin(login);
    
    const token = Jwt.sign(
      result,
      fs.readFileSync('jwt.evaluation.key', 'utf-8'),
      {expiresIn: '90d'}
    );

    return { auth: true, token }
  } 
}