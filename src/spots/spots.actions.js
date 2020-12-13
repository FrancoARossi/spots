export const GET_SPOTS_REQUEST = "GET_SPOTS_REQUEST";
export const GET_SPOTS_RESPONSE = "GET_SPOTS_RESPONSE";
export const GET_SPOTS_ERROR = "GET_SPOTS_ERROR";

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
};

export default spots;
