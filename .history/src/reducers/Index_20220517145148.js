import { combineReducers } from "redux";

import useReducer from "./useReducer";

const rootReducer = combineReducers({
  useState: useReducer,
});

export default rootReducer;
