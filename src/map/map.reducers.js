import { UPDATE_VIEWPORT } from "./map.actions";

const initialState = {
  latitude: 37.7577,
  longitude: -122.4376,
  width: "100vw",
  height: "100vh",
  zoom: 15,
};

const mapReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT: {
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        zoom: action.payload.zoom,
      };
    }
    default:
      return state;
  }
};

export default mapReducers;
