import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types';

interface IUserState {
  loading: boolean;
  user: IUser | null;
}

export default class UserSlice {
  private readonly _initialState: IUserState;

  constructor() {
    this._initialState = {
      loading: false,
      user: null,
    };
  }

  public createSlice() {
    return createSlice({
      name: 'auth',
      initialState: this._initialState,
      reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
          state.loading = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
          state.user = action.payload;
        },
      },
    });
  }
}

export const { setLoading, setUser } = new UserSlice().createSlice().actions;
