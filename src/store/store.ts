import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../api/repositoryFeed';
import { profileApi } from '../api/repositoryProfile';

export const store = configureStore({
  reducer: {
    [fetchApi.reducerPath]: fetchApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([fetchApi.middleware, profileApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
