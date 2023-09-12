import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import mongoose from 'mongoose';
import Routes from '@/routes';

export default class Server {
  constructor(app: Application, PORT: number, DB_URL: string) {
    this.config(app);
    new Routes(app);
    this.startApp(app, PORT, DB_URL);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: 'http://localhost:5173',
    };
    app.use(cors(corsOptions));
    app.use(express.json());
  }

  private async startApp(app: Application, PORT: number, DB_URL: string) {
    try {
      await mongoose.connect(DB_URL);
      app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    } catch (error) {
      console.log(error);
    }
  }
}
