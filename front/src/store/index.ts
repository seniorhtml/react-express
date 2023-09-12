import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { bookReducer } from '@/modules/Book';
import { authReducer } from '@/modules/Auth';
import type { TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: {
    book: bookReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
