import { Request, Response } from 'express';
import PostService from '../services';

interface IPostController {
  getPosts(Request, Response): any;
  getPost(Request, Response): any;
  createPost(Request, Response): any;
}

export default class PostController implements IPostController {
  private readonly _service: PostService;

  constructor() {
    this._service = new PostService();
  }

  public async getPosts(req: Request, res: Response) {
    try {
      const { page = 1, limit = 12 } = req.query;
      const posts = await this._service.getPosts(+page, +limit);
      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public async getPost(req: Request, res: Response) {
    try {
      const post = await this._service.getPost(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async createPost(req: Request, res: Response) {
    try {
      const post = await this._service.createPost(req.body);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
