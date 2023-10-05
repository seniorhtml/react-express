import { Router } from 'express';
import PostController from '../controllers';

export default class PostRoutes {
  private readonly _router ;
  private readonly _controller;

  constructor() {
    this._router = Router();
    this._controller = new PostController();
    this.initializeRoutes();
  }

  get router() {
    return this._router;
  }

  private initializeRoutes() {
    this.router.get('/posts', this._controller.getPosts);
    this.router.get('/posts/:id', this._controller.getPost);
    this.router.post('/create/post', this._controller.createPost);
  }
}