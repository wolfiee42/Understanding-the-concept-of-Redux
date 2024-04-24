import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postAPI";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const getposts1 = await fetchPosts();
  return getposts1;
});

const postSlice2 = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postSlice2.reducer;
