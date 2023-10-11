import { model, Schema } from 'mongoose';

export interface IPost {
  title: string;
  body: string;
  image: string;
}

class PostModel {
  static createModel() {
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

const postModel = PostModel.createModel();

export default postModel;
