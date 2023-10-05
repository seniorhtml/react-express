import { Router } from 'express';
import UserController from '@/modules/User/controllers';

export default class UserRoutes {
  private readonly _router;
  private readonly _controller;

  constructor() {
    this._router = Router();
    this._controller = new UserController();
    this.initializeRoutes();
  }

  get router() {
    return this._router;
  }

  private initializeRoutes() {
    this._router.post('/register', this._controller.register);
    this._router.post('/login', this._controller.login);
    this._router.get('/user/:username', this._controller.getUser);
  }
}
