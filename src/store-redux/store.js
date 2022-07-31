import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./reducers/list-reducer/listReducer";

const store = configureStore({
  reducer: {
    lists: listReducer,
  },
});

export default store;
