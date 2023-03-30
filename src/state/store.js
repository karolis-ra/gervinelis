import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home/reducer";
import navigationReducer from "./navigation/reducer";
import reservationReducer from "./reservation/reducer";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    navigation: navigationReducer,
    reservation: reservationReducer,
  },
});
