import { Application } from 'express';
import { bookRoutes } from './modules/Book';
import { userRoutes } from './modules/User';

export default class Routes {
  static init(app: Application) {
    app.use('/', bookRoutes);
    app.use('/auth', userRoutes);
  }
}
