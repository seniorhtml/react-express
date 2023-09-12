import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  loading: boolean;
};

class AuthSlice {
  private readonly initialState: AuthState;

  constructor() {
    this.initialState = {
      loading: false,
    };
  }

  public createSlice() {
    return createSlice({
      name: 'auth',
      initialState: this.initialState,
      reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
          state.loading = action.payload;
        },
      },
    });
  }
}

const bookSlice = new AuthSlice().createSlice();

export const { setLoading } = bookSlice.actions;

export default bookSlice.reducer;
