import { Router } from 'express';
import AuthController from '@/modules/Auth/controllers';

class authRoutes {
  public readonly router = Router();
  private readonly controller = AuthController;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/register', this.controller.register);
    this.router.post('/login', this.controller.login);
    this.router.get('/users', this.controller.getUsers);
  }
}

export default new authRoutes().router;
