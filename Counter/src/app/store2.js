import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counters2/counterSlice2";

const store2 = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export default store2;
