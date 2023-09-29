import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import mongoose from 'mongoose';
import Routes from '@/routes';

export default class Server {
  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: 'http://localhost:5173',
    };
    app.use(cors(corsOptions));
    app.use(express.json());
  }

  public async start(app: Application, PORT: number, DB_URL: string) {
    try {
      this.config(app);
      Routes.init(app);
      await mongoose.connect(DB_URL);
      app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    } catch (error) {
      console.log(error);
    }
  }
}
