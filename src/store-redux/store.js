import { configureStore } from "@reduxjs/toolkit";
// import listReducer from "./reducers/list-reducer/listReducer";
import PostReducer from "./features/postSlice";

const store = configureStore({
  reducer: {
    post: PostReducer,
  },
});
export default store;
