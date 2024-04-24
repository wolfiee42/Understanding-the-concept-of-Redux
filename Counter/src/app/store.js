import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../../features/counters/counterSlice";
import postReducer from "../../features/posts2/postSlice2";

const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postReducer,
  },
});

export default store;
