import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from '../store';
import { axios } from '@/main';
import type { IUser } from '../types';

class AuthService {
  static register = createAsyncThunk(
    'auth/Register',
    async (user: IUser, { dispatch }) => {
      try {
        dispatch(setLoading(true));
        await axios.post(`/auth/register`, user);
      } finally {
        dispatch(setLoading(false));
      }
    },
  );

  static login = createAsyncThunk('auth/Login', async (user: IUser, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      await axios.post(`/auth/login`, user);
    } finally {
      dispatch(setLoading(false));
    }
  });
}

export default AuthService;
