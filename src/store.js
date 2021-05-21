import {configureStore} from "@reduxjs/toolkit";
import index from "./reducers";
import spotsMiddleware from "./spots/spots.middleware";

export default configureStore({
    reducer: index,
    middleware: [spotsMiddleware],
});
