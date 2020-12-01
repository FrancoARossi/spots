import { UPDATE_USER_POSITION } from "./user.actions";

let initialState = {
  latitude: 37.7577,
  longitude: -122.4376,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_POSITION: {
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    }
    default:
      return state;
  }
};

export default userReducers;
