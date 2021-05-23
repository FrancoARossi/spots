export const GET_SPOTS_REQUEST = "GET_SPOTS_REQUEST";
export const GET_SPOTS_RESPONSE = "GET_SPOTS_RESPONSE";
export const GET_SPOTS_ERROR = "GET_SPOTS_ERROR";
export const SET_SELECTED_SPOT = "SET_SELECTED_SPOT";

const spotsActions = {
    getSpots: {
        request: (userPosition, tagsList) => ({type: GET_SPOTS_REQUEST, userPosition, tagsList}),
        response: (res) => ({type: GET_SPOTS_RESPONSE, res}),
        error: (err) => ({type: GET_SPOTS_ERROR, err})
    },
    setSelectedSpot: (spot) => ({type: SET_SELECTED_SPOT, spot}),
};

export default spotsActions;
