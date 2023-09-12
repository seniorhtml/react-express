import { model, Schema } from 'mongoose';

class AuthModel {
  public readonly user = model(
    'user',
    new Schema({
      username: { type: String, unique: true, required: true },
      password: { type: String, required: true },
    }),
  );
}

export default new AuthModel();
