export interface IBook {
  id: number;
  title: string;
  body: string;
  image: string;
}

export interface IBookState {
  list: IBook[];
  single: IBook;
  count: number;
  loading: boolean;
}
