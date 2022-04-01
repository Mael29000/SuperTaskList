import { combineReducers } from "redux";
import { tasksList } from "./tasksList";

export const rootReducer = combineReducers({
  tasksList,
});
