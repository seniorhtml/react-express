import jwt from 'jsonwebtoken';

export default class Utils {
  static generateAccessToken(id) {
    return jwt.sign({ id }, 'SECRET_KEY', { expiresIn: '1d' });
  }
}
