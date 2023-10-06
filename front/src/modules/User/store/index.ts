import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types';

interface IUserState {
  loading: boolean;
  user: IUser | null;
}

class UserSlice {
  private readonly _initialState: IUserState;

  constructor() {
    this._initialState = {
      loading: false,
      user: null,
    };
  }

  public createSlice() {
    return createSlice({
      name: 'user',
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

const userSlice = new UserSlice().createSlice();
export const { setLoading, setUser } = userSlice.actions;
export default userSlice.reducer;
