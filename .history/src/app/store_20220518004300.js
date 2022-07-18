import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "../features/UserSlice";
export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});
