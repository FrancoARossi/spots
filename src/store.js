import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers/reducers";
import spotsMiddleware from "./spots/spots.middleware";

export default configureStore({
    reducer: reducers,
    middleware: [spotsMiddleware],
});
