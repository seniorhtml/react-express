import { Router } from 'express';
import BookController from '@/modules/Book/controllers';

class bookRoutes {
  public readonly router = Router();
  private readonly controller = BookController;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/books', this.controller.findAll);
    this.router.get('/books/:id', this.controller.findOne);
    this.router.post('/book', this.controller.create);
  }
}

export default new bookRoutes().router;
