import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeServiceBlocks: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
  },
});

export const { openModal } = reservationSlice.actions;

export default reservationSlice.reducer;
