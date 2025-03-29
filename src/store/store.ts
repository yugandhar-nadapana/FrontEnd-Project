import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;