import { configureStore } from "@reduxjs/toolkit";
import viewportReducers from "./slices/viewportSlice";
import userReducers from "./slices/userSlice";

export default configureStore({
  reducer: {
    viewport: viewportReducers,
    user: userReducers,
  },
});
