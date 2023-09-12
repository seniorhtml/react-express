import { IBook } from '@/modules/Book/types';
import BookModel from '../models';

class BookService {
  private readonly model = BookModel.book;

  public async findAll({ page = 1, limit = 12 }) {
    const list = await this.model
      .find()
      .skip((page - 1) * limit)
      .limit(limit);
    const count = await this.model.countDocuments();
    return { list, count };
  }
  public async findOne(id: number | string) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const book = await this.model.findOne({ id });
    return book;
  }

  public async create(book: IBook) {
    return await this.model.create(book);
  }
}

export default new BookService();
