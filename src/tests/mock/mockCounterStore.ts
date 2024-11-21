import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/counterSlice';

export const createMockCounterStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
