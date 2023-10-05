import { Application } from 'express';
import { postRoutes } from './modules/Post';
import { userRoutes } from './modules/User';

export default class Routes {
  static init(app: Application) {
    app.use('/', postRoutes);
    app.use('/auth', userRoutes);
  }
}
