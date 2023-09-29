import { model, Schema } from 'mongoose';

export interface IUserModel {
  user: { username: string; password: boolean };
}

export default class userModel implements IUserModel {
  public readonly user;

  constructor() {
    this.user = model(
      'user',
      new Schema({
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        sanjar: { type: String, required: true },
      }),
    );
  }
}
