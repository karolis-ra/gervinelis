import { createSlice } from "@reduxjs/toolkit";
import { reviews } from "../../assets/reviews";

const initialState = {
  slideNum: 1,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("this is my state", state);
      if (state.slideNum === reviews.length) {
        state.slideNum = 0;
      }
      state.slideNum++;
    },
    decrement: (state) => {
      console.log(state.slideNum);
      if (state.slideNum === 0) {
        state.slideNum = reviews.length - 1;
      }
      state.slideNum--;
    },
  },
});

export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;
