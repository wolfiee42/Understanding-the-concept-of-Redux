import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./postAPI";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
  const getposts = await fetchPost();
  return getposts;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  // for async functionality redux provide us another reducer named extraReducer, which handles promises. extraReducer func has a parameter named builder which handle promises. promises has 3 different state.
  // 1. the promise is called.
  // 2. the promise is pending.
  // 3. the promise is rejected.
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;