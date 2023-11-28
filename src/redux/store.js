import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;
