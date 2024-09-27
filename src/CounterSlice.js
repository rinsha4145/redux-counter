// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (count) => {
      count.value += 1;
    },
    decrement: (count) => {
      count.value -= 1;
    }
  }
});

// Export the actions
export const { increment, decrement } = counterSlice.actions;

// Export the reducer to use in the store
export default counterSlice.reducer;
