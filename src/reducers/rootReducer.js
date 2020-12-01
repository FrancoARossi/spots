import { combineReducers } from "@reduxjs/toolkit";
import mapReducers from "../map/map.reducers";
import userReducers from "../user/user.reducers";
import spotsReducers from "../spots/spots.reducers";

const rootReducer = combineReducers({
  map: mapReducers,
  user: userReducers,
  spots: spotsReducers,
});

export default rootReducer;
