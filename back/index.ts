import 'module-alias/register';
import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Routes from '@/routes';

class Server {
  private readonly app;
  private readonly PORT;
  private readonly DB_URL;

  constructor(app: Application, PORT: number, DB_URL: string) {
    this.app = app;
    this.PORT = PORT;
    this.DB_URL = DB_URL;
  }

  private config() {
    Routes.init(this.app);
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: 'http://localhost:5173/',
      }),
    );
  }

  public async start() {
    try {
      this.config();
      await mongoose.connect(this.DB_URL);
      this.app.listen(this.PORT, () => console.log('SERVER STARTED ON PORT ' + this.PORT));
    } catch (error) {
      console.log(error);
    }
  }
}

const app: Application = express();
const PORT = 5555;
const DB_URL = 'mongodb+srv://koka:koka@cluster0.brcavf7.mongodb.net/?retryWrites=true&w=majority';
const server = new Server(app, PORT, DB_URL);
server.start();
