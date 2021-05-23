import {combineReducers} from "@reduxjs/toolkit";
import mapReducer from "../map/map.reducer";
import spotsReducer from "../spots/spots.reducer";
import tagsReducer from "../tags/tags.reducer";

const reducers = combineReducers({
    map: mapReducer,
    spots: spotsReducer,
    tags: tagsReducer,
});

export default reducers;
