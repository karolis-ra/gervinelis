import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home/reducer";
// import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: { home: homeReducer },
});
