import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { postReducer } from '@/modules/Post';
import { userReducer } from '@/modules/User';
import type { TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store;
