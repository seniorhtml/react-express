import userModel from '../models';
import bcrypt from 'bcrypt';
import type { IUserModel } from '../models';

interface IUserService {
  getUsers(): Promise<IUserModel>;
  getUser(username: string): Promise<IUserModel>;
  createUser(username: string, password: string): Promise<IUserModel>;
}

export default class userService implements IUserService {
  private readonly model;

  constructor() {
    this.model = new userModel();
  }

  public async getUsers() {
    const users = await this.model.find();
    console.log(this.model);
    return users;
  }

  public async getUser(username: string) {
    const user = await this.model.findOne({ username });
    return user;
  }

  public createUser(username: string, password: string) {
    const hashPassword = bcrypt.hashSync(password, 7);
    const user = new this.model({ username, password: hashPassword });
    return user.save();
  }
}
