import { Request, Response } from 'express';
import Utils from '@/utils';
import bcrypt from 'bcrypt';
import UserService from '../services';

interface IUserController {
  register(Request, Response): Promise<any>;
  login(Request, Response): Promise<any>;
  getUser(Request, Response): Promise<any>;
}

export default class UserController implements IUserController {
  private readonly _service: UserService;

  constructor() {
    this._service = new UserService();
  }

  public async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await this._service.getUser(username);
      if (user) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
      const newUser = await this._service.createUser(username, password);
      const token = Utils.generateAccessToken(newUser._id);
      return res.status(200).json({ token });
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
      const token = Utils.generateAccessToken(user._id);
      return res.status(200).json({ token });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async getUser(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const user = await this._service.getUser(username);
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
