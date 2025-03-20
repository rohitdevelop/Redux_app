import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Fetures/counter/counterSlice"; // Corrected path

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
