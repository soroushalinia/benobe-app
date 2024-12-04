import { configureStore } from '@reduxjs/toolkit';
import storyReducer from '@/features/home/stories/storySlice';

export const store = configureStore({
  reducer: {
    stories: storyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
