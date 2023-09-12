import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import AuthService from '../services';
import { generateAccessToken } from '@/utils';

class AuthController {
  public async register(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await AuthService.getUser(username);
      if (user) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
      const newUser = await AuthService.createUser(username, password);
      return res.status(200).json({ username: newUser.username });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await AuthService.getUser(username);
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
      const users = await AuthService.getUsers();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new AuthController();
