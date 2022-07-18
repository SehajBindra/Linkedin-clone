import { combineReducers } from "react-redux";

import { useReducer } from "./useReducer";

const rootReducer = combineReducers({
  useState: useReducer,
});
