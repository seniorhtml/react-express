import AuthModel from '../models';
import bcrypt from 'bcrypt';

class BookService {
  private readonly userModel = AuthModel.user;

  public async getUsers() {
    const users = await this.userModel.find();
    return users;
  }

  public async getUser(username: string) {
    const user = await this.userModel.findOne({ username });
    return user;
  }

  public createUser(username: string, password: string) {
    const hashPassword = bcrypt.hashSync(password, 7);
    const user = new this.userModel({ username, password: hashPassword });
    return user.save();
  }
}

export default new BookService();
