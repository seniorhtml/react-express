import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading, setUser } from '../store';
import { axios } from '@/main';
import type { IUser } from '../types';

export default class UserService {
  static register = createAsyncThunk(
    'user/Register',
    async (user: IUser, { dispatch }) => {
      try {
        dispatch(setLoading(true));
        const { data } = await axios.post(`/auth/register`, user);
        localStorage.setItem('token', data.token);
      } finally {
        dispatch(setLoading(false));
      }
    },
  );

  static login = createAsyncThunk('user/Login', async (user: IUser, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.post(`/auth/login`, user);
      localStorage.setItem('token', data.token);
    } finally {
      dispatch(setLoading(false));
    }
  });

  static getUser = createAsyncThunk(
    'user/GetUser',
    async (username: string, { dispatch }) => {
      try {
        dispatch(setLoading(true));
        const user = await axios.get(`/auth/user/${username}`);
        dispatch(setUser(user.data));
      } finally {
        dispatch(setLoading(false));
      }
    },
  );
}
