import { model, Schema } from 'mongoose';

export interface IPost {
  title: string;
  body: string;
  image: string;
}

export default class PostModel {
  constructor() {
    this.createModel();
  }
  private createModel() {
    return model<IPost>(
      'post',
      new Schema({
        title: { type: String, required: true },
        body: { type: String, required: true },
        image: { type: String },
      }),
    );
  }
}
