import 'module-alias/register';
import express, { Application } from 'express';
import Server from '@/main';

const app: Application = express();
const PORT = 5555;
const DB_URL = 'mongodb+srv://koka:koka@cluster0.brcavf7.mongodb.net/?retryWrites=true&w=majority';

const server = new Server();
server.start(app, PORT, DB_URL);
