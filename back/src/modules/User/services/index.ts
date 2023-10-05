import UserModel from '../models';
import bcrypt from 'bcrypt';
import type { IUser } from '../models';

interface IUserService {
  getUser(string): Promise<IUser>;
  createUser(username: string, password: string): Promise<IUser>;
}

export default class UserService implements IUserService {
  private readonly _model;

  constructor() {
    this._model = new UserModel();
  }

  public async getUser(username: string) {
    return await this._model.findOne({ username });
  }

  public createUser(username: string, password: string) {
    const hashPassword = bcrypt.hashSync(password, 7);
    const user = new this._model({ username, password: hashPassword });
    return user.save();
  }
}
