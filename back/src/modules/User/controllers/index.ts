import { Request, Response } from 'express';
import { generateAccessToken } from '@/utils';
import bcrypt from 'bcrypt';
import userService from '../services';

interface IUserController {
  register(Request, Response): Promise<any>;
  login(Request, Response): Promise<any>;
  getUsers(Request, Response): Promise<any>;
}

export default class userController implements IUserController {
  private readonly _service;

  constructor() {
    this._service = new userService();
  }

  public async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await this._service.getUser(username);
      if (user) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
      const newUser = await this._service.createUser(username, password);
      return res.status(200).json({ username: newUser.username });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await this._service.getUser(username);
      if (!user) {
        return res.status(400).json({ message: `Пользователь ${username} не найден` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Введен неверный пароль' });
      }
      const token = generateAccessToken(user._id);
      return res.status(200).json({ token });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await this._service.getUsers();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
