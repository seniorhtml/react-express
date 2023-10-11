import { Router } from 'express';
import UserController from '@/modules/User/controllers';

export default class UserRoutes {
  private readonly _router: Router;
  private readonly _controller: UserController;

  constructor() {
    this._router = Router();
    this._controller = new UserController();
    this.initializeRoutes();
  }

  get router() {
    return this._router;
  }

  private initializeRoutes() {
    this._router.post('/register', (req, res) => this._controller.register(req, res));
    this._router.post('/login', (req, res) => this._controller.login(req, res));
    this._router.get('/user/:username', (req, res) => this._controller.getUser(req, res));
  }
}
