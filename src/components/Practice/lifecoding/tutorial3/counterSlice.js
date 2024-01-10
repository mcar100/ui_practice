import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0 },
  reducers: {
    increase: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrease: (state, action) => {
      state.value = state.value - action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// export slice
export default counterSlice;

// export actions
export const increase = counterSlice.actions.increase;
export const decrease = counterSlice.actions.decrease;
export const reset = counterSlice.actions.reset;
