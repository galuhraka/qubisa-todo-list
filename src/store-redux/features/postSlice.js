/* eslint-disable no-const-assign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("http://localhost:3004/data").then((res) => res.json());
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });

    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
