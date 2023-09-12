import jwt from 'jsonwebtoken';

export function generateRandomId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function generateAccessToken(id) {
  return jwt.sign({ id }, 'SECRET_KEY', { expiresIn: '1d' });
}
