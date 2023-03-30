import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeServiceBlocks: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    sectionControl: (state, { payload }) => {
      console.log("this is payload", payload);
      const index = state.activeServiceBlocks.indexOf(payload);

      state.activeServiceBlocks.includes(payload)
        ? state.activeServiceBlocks.splice(index, 1)
        : state.activeServiceBlocks.push(payload);
    },
  },
});

export const { sectionControl } = reservationSlice.actions;

export default reservationSlice.reducer;
