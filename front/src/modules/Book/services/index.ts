import { createAsyncThunk } from '@reduxjs/toolkit';
import { setBooks, setCount, setLoading, setBook } from '../store';
import { axios } from '@/main';
import type { IBook } from '../types';

class BookService {
  static getBooks = createAsyncThunk(
    'news/getBooks',
    async ({ limit = 12, page = 1 }: { limit?: number; page: number }, { dispatch }) => {
      try {
        dispatch(setLoading(true));
        const { data } = await axios.get('/books', {
          params: { limit, page },
        });
        dispatch(setBooks(data?.list));
        dispatch(setCount(data?.count));
      } finally {
        dispatch(setLoading(false));
      }
    },
  );

  static getBook = createAsyncThunk('news/getBook', async (id: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.get(`/books/${id}`);
      dispatch(setBook(data));
    } finally {
      dispatch(setLoading(false));
    }
  });

  static createBook = createAsyncThunk(
    'news/createBook',
    async (book: IBook, { dispatch }) => {
      try {
        dispatch(setLoading(true));
        await axios.post(`/book`, book);
      } finally {
        dispatch(setLoading(false));
      }
    },
  );
}

export default BookService;
