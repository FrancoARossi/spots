export const GET_SPOTS_REQUEST = "GET_SPOTS_REQUEST";
export const GET_SPOTS_RESPONSE = "GET_SPOTS_RESPONSE";
export const GET_SPOTS_ERROR = "GET_SPOTS_ERROR";
export const SET_SELECTED_SPOT = "SET_SELECTED_SPOT";

const spots = {
  getSpotsRequest: (userPosition, tagsList) => ({
    type: GET_SPOTS_REQUEST,
    payload: { userPosition: userPosition, tagsList: tagsList },
  }),
  getSpotsResponse: (response) => ({
    type: GET_SPOTS_RESPONSE,
    payload: response,
  }),
  getSpotsError: (error) => ({
    type: GET_SPOTS_ERROR,
    payload: error,
  }),
  setSelectedSpot: (spot) => ({
    type: SET_SELECTED_SPOT,
    payload: spot,
  }),
};

export default spots;
