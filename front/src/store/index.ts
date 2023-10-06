import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import UserReducer from '@/modules/User/store';
import PostReducer from '@/modules/Post/store';

const store = configureStore({
  reducer: combineReducers({
    user: UserReducer,
    post: PostReducer,
  }),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;
export default store;
