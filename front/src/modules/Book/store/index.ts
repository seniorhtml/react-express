import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IBookState, IBook } from '../types';

class BookSlice {
  private readonly initialState: IBookState;

  constructor() {
    this.initialState = {
      list: [],
      single: {} as IBook,
      count: 0,
      loading: false,
    };
  }

  public createSlice() {
    return createSlice({
      name: 'book',
      initialState: this.initialState,
      reducers: {
        setBooks: (state, action: PayloadAction<IBook[]>) => {
          state.list = action.payload;
        },
        setBook: (state, action: { payload: IBook }) => {
          state.single = action.payload;
        },
        setCount: (state, action: PayloadAction<number>) => {
          state.count = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
          state.loading = action.payload;
        },
      },
    });
  }
}

const bookSlice = new BookSlice().createSlice();

export const { setBooks, setBook, setCount, setLoading } = bookSlice.actions;

export default bookSlice.reducer;
