import { model, Schema } from 'mongoose';

export interface IUser {
   username: string;
   password: string;
}

export default class UserModel {
  constructor() {
    this.createModel();
  }

  private createModel() {
    return model<IUser>(
      'user',
      new Schema({
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true }
      }),
    );
  }
}
