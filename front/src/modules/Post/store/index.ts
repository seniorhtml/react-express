import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IPost } from '../types';

interface IPostState {
  list: IPost[];
  single: IPost | null;
  count: number;
  loading: boolean;
}

class PostSlice {
  private readonly _initialState: IPostState;

  constructor() {
    this._initialState = {
      list: [],
      single: null,
      count: 0,
      loading: false,
    };
  }

  public createSlice() {
    return createSlice({
      name: 'post',
      initialState: this._initialState,
      reducers: {
        setList: (state, action: PayloadAction<IPost[]>) => {
          state.list = action.payload;
        },
        setSingle: (state, action: { payload: IPost }) => {
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

const postSlice = new PostSlice().createSlice();
export const { setList, setSingle, setCount, setLoading } = postSlice.actions;
export default postSlice.reducer;
