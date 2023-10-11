import { Router } from 'express';
import PostController from '../controllers';

export default class PostRoutes {
  private readonly _router: Router;
  private readonly _controller: PostController;

  constructor() {
    this._router = Router();
    this._controller = new PostController();
    this.initializeRoutes();
  }

  get router() {
    return this._router;
  }

  private initializeRoutes() {
    this.router.get('/posts', (req, res) => this._controller.getPosts(req, res));
    this.router.get('/posts/:id', (req, res) => this._controller.getPost(req, res));
    this.router.post('/create/post', (req, res) => this._controller.createPost(req, res));
  }
}
