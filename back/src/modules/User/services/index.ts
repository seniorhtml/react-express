import bcrypt from 'bcrypt';
import type { IUser } from '../models';
import userModel from '../models';

interface IUserService {
  getUser(string): Promise<IUser>;
  createUser(username: string, password: string): Promise<IUser>;
}

export default class UserService implements IUserService {
  private readonly _model;

  constructor() {
    this._model = userModel;
  }

  public async getUser(username: string) {
    const user = await this._model.findOne({ username });
    return user;
  }

  public createUser(username: string, password: string) {
    const hashPassword = bcrypt.hashSync(password, 7);
    const user = new this._model({ username, password: hashPassword });
    return user.save();
  }
}
