import PostModel from '../models';
import type { IPost } from '../models';

interface IPostService {
  getPosts(page: number, limit: number): any;
  getPost(string): any;
  createPost(IPost): any;
}

export default class PostService implements IPostService {
  private readonly _model;

  constructor() {
    this._model = PostModel;
  }

  public async getPosts(page = 1, limit = 12) {
    const list = await this._model
      .find()
      .skip((page - 1) * limit)
      .limit(limit);
    const count = await this._model.countDocuments();
    return { list, count };
  }
  public async getPost(id: string) {
    if (!id) {
      throw new Error('не указан ID');
    }
    return await this._model.findOne({ _id: id });
  }

  public async createPost(post: IPost) {
    return await this._model.create(post);
  }
}
