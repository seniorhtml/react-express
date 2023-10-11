import { Application } from 'express';
import { postRoutes } from './modules/Post';
import { userRoutes } from './modules/User';
import { verifyAuth } from '@/middlewares/verifyAuth';

export default class Routes {
  static init(app: Application) {
    app.use('/', verifyAuth, postRoutes);
    app.use('/auth', userRoutes);
  }
}
