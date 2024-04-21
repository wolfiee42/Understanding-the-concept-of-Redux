import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counters2/counterSlice2";
import postsReducer from "../../features/posts/postSlice";

const store2 = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
  },
});

export default store2;
