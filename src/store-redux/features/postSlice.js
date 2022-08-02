/* eslint-disable no-const-assign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postID = 4;

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("http://localhost:3000/posts").then((res) => res.json());
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ id, title, cards }) => {
    const response = await axios.get("http://localhost:3000/posts", {
      id,
      title,
      cards,
    });
    return response.data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
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

    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts.id = postID += 1;
      state.posts.title = action.payload.title;
      state.posts.cards = [];
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
