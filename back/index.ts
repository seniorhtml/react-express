import 'module-alias/register';
import express, { Application } from 'express';
import Server from '@/main';

const app: Application = express();
const PORT = 6000;
const DB_URL = 'mongodb+srv://cloud:cloud@cluster0.5dulkcb.mongodb.net/test?retryWrites=true&w=majority';

new Server(app, PORT, DB_URL);
