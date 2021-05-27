export const GET_SPOTS_REQUEST = "GET_SPOTS_REQUEST";
export const GET_SPOTS_RESPONSE = "GET_SPOTS_RESPONSE";
export const GET_SPOTS_ERROR = "GET_SPOTS_ERROR";
export const SET_SELECTED_SPOT = "SET_SELECTED_SPOT";
export const CREATE_SPOT_REQUEST = "CREATE_SPOT_REQUEST";
export const CREATE_SPOT_RESPONSE = "CREATE_SPOT_RESPONSE";
export const CREATE_SPOT_ERROR = "CREATE_SPOT_ERROR";

const spotsActions = {
    getSpots: {
        request: (userPosition, tagsList) => ({type: GET_SPOTS_REQUEST, userPosition, tagsList}),
        response: (res) => ({type: GET_SPOTS_RESPONSE, res}),
        error: (err) => ({type: GET_SPOTS_ERROR, err})
    },
    createSpot: {
        request: (spot) => ({type: CREATE_SPOT_REQUEST, spot}),
        response: (res) => ({type: CREATE_SPOT_RESPONSE, res}),
        error: (err) => ({type: CREATE_SPOT_ERROR, err})
    },
    setSelectedSpot: (spot) => ({type: SET_SELECTED_SPOT, spot}),
};

export default spotsActions;
