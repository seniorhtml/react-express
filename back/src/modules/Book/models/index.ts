import { model, Schema } from 'mongoose';

class BookModel {
  public readonly book = model(
    'book',
    new Schema({
      id: { type: String, required: true },
      title: { type: String, required: true },
      body: { type: String, required: true },
      image: { type: String },
    }),
  );
}

export default new BookModel();
