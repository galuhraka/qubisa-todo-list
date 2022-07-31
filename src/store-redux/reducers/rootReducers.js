import { combineReducers } from "redux";
import listReducer from "./list-reducer/listReducer";

const rootReducer = combineReducers({
  lists: listReducer,
});

export default rootReducer
