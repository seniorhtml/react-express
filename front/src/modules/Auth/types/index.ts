export interface IUser {
  username: string;
  password: string;
}

export interface ILoginForm extends IUser {
  remember: string;
}
