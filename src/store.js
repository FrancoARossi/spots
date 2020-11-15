import { configureStore } from "@reduxjs/toolkit";
import viewportReducers from "./slices/viewportSlice";
import userReducers from "./slices/userSlice";
import spotsReducers from "./slices/spotsSlice";

export default configureStore({
  reducer: {
    viewport: viewportReducers,
    user: userReducers,
    spots: spotsReducers,
  },
});
