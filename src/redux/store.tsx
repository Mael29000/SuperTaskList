import { createStore } from "redux";
import { rootReducer } from "./reducers";

// Store attached to React - accessible from all components

export const store = createStore(rootReducer);
