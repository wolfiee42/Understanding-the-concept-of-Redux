import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counters2/counterSlice2";
import postReducer from "../../features/posts/postSlice";

const store2 = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postReducer,
  },
});

export default store2;
