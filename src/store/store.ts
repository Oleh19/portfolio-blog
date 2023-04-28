import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authApi } from '../api/repository/repositoryAuth';
import { fetchApi } from '../api/repository/repositoryFeed';
import { profileApi } from '../api/repository/repositoryProfile';
import { authSlice } from './slices/serviceSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'blog',
  storage,
  whiteList: [authSlice.name],
};

const persistentReducer = persistReducer(
  persistConfig,
  combineReducers({
    [fetchApi.reducerPath]: fetchApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [authApi.reducerPath ]: authApi.reducer,
    [authSlice.name]: authSlice.reducer,
  })
);

export const store = configureStore({
  reducer: persistentReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([fetchApi.middleware, profileApi.middleware, authApi.middleware]),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type GetRootState = typeof store.getState;
