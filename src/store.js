import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import spotsMiddleware from "./spots/spots.middleware";

export default configureStore({
  reducer: rootReducer,
  middleware: [spotsMiddleware],
});
