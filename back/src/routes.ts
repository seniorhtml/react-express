import { Application } from 'express';
import { bookRoutes } from './modules/Book';
import { authRoutes } from './modules/Auth';

export default class Routes {
  constructor(app: Application) {
    app.use('/', bookRoutes);
    app.use('/auth', authRoutes);
  }
}
