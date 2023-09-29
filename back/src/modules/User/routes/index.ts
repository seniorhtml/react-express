import { Router } from 'express';
import AuthController from '@/modules/User/controllers';

interface IUserRoutes {
  router: Router;
}

export default class userRoutes implements IUserRoutes {
  public readonly router;
  private readonly _controller;

  constructor() {
    this.router = Router();
    this._controller = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/register', this._controller.register);
    this.router.post('/login', this._controller.login);
    this.router.get('/users', this._controller.getUsers);
  }
}
