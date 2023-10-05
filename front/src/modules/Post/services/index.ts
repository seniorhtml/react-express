import { createAsyncThunk } from '@reduxjs/toolkit';
import { setList, setCount, setLoading, setSingle } from '../store';
import { axios } from '@/main';
import type { IPost } from '../types';

export default class PostService {

  static getList = createAsyncThunk(
    'post/getList',
    async ({ limit = 12, page = 1 }: { limit?: number; page: number }, { dispatch }) => {
      try {
        dispatch(setLoading(true));
        const { data } = await axios.get('/posts', {
          params: { limit, page },
        });
        dispatch(setList(data?.list));
        dispatch(setCount(data?.count));
      } finally {
        dispatch(setLoading(false));
      }
    },
  );

  static getSingle = createAsyncThunk('post/getSingle', async (id: string, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.get(`/posts/${id}`);
      dispatch(setSingle(data));
    } finally {
      dispatch(setLoading(false));
    }
  });

  static createPost = createAsyncThunk(
    'post/createPost',
    async (post: IPost, { dispatch }) => {
      try {
        dispatch(setLoading(true));
        await axios.post(`/create/post`, post);
      } finally {
        dispatch(setLoading(false));
      }
    },
  );
}