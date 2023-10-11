import { model, Schema } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
}

class UserModel {
  static createModel() {
    return model<IUser>(
      'user',
      new Schema({
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
      }),
    );
  }
}

const userModel = UserModel.createModel();

export default userModel;
