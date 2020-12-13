import { combineReducers } from "@reduxjs/toolkit";
import mapReducers from "../map/map.reducers";
import userReducers from "../user/user.reducers";
import spotsReducers from "../spots/spots.reducers";
import tagsReducers from "../tags/tags.reducers";

const rootReducer = combineReducers({
  map: mapReducers,
  user: userReducers,
  spots: spotsReducers,
  tags: tagsReducers,
});

export default rootReducer;
