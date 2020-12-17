import {
  GET_SPOTS_REQUEST,
  GET_SPOTS_RESPONSE,
  GET_SPOTS_ERROR,
  SET_SELECTED_SPOT,
} from "./spots.actions";

const initialState = {
  spotsList: [],
  status: "idle",
  error: null,
  selectedSpot: null,
};

const spotsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS_REQUEST:
      return { ...state, status: "loading" };
    case GET_SPOTS_RESPONSE:
      return { ...state, spotsList: action.payload, status: "idle" };
    case GET_SPOTS_ERROR:
      return { ...state, status: "error", error: action.payload };
    case SET_SELECTED_SPOT:
      return { ...state, selectedSpot: action.payload };
    default:
      return state;
  }
};

export default spotsReducers;
