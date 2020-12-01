import {
  GET_SPOTS_REQUEST,
  GET_SPOTS_RESPONSE,
  GET_SPOTS_ERROR,
} from "./spots.actions";

const initialState = {
  spotsList: [],
  status: "idle",
  error: null,
};

const spotsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS_REQUEST:
      return { ...state, status: "loading" };
    case GET_SPOTS_RESPONSE:
      return { ...state, spotsList: action.payload, status: "idle" };
    case GET_SPOTS_ERROR:
      return { ...state, status: "error", error: action.payload };
    default:
      return state;
  }
};

export default spotsReducers;
