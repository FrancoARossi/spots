export const GET_SPOTS_REQUEST = "GET_SPOTS_REQUEST";
export const GET_SPOTS_RESPONSE = "GET_SPOTS_RESPONSE";
export const GET_SPOTS_ERROR = "GET_SPOTS_ERROR";
export const SET_SELECTED_SPOT = "SET_SELECTED_SPOT";
export const CREATE_SPOT_REQUEST = "CREATE_SPOT_REQUEST";
export const CREATE_SPOT_RESPONSE = "CREATE_SPOT_RESPONSE";
export const CREATE_SPOT_ERROR = "CREATE_SPOT_ERROR";
export const UPLOAD_PHOTOGRAPH_REQUEST = "UPLOAD_PHOTOGRAPH_REQUEST";
export const CREATE_PHOTOGRAPH_REQUEST = "CREATE_PHOTOGRAPH_REQUEST";
export const CREATE_PHOTOGRAPH_RESPONSE = "CREATE_PHOTOGRAPH_RESPONSE";
export const CREATE_PHOTOGRAPH_ERROR = "CREATE_PHOTOGRAPH_ERROR";
export const GET_SPOT_PHOTOGRAPHS_REQUEST = "GET_SPOT_PHOTOGRAPHS_REQUEST";
export const GET_SPOT_PHOTOGRAPHS_RESPONSE = "GET_SPOT_PHOTOGRAPHS_RESPONSE";
export const GET_SPOT_PHOTOGRAPHS_ERROR = "GET_SPOT_PHOTOGRAPHS_ERROR";
export const RESET_SELECTED_SPOT_PHOTOGRAPHS = "RESET_SELECTED_SPOT_PHOTOGRAPHS";

const spotsActions = {
    getSpots: {
        request: (userPosition, tagsList) => ({type: GET_SPOTS_REQUEST, userPosition, tagsList}),
        response: (res) => ({type: GET_SPOTS_RESPONSE, res}),
        error: (err) => ({type: GET_SPOTS_ERROR, err})
    },
    setSelectedSpot: (spot) => ({type: SET_SELECTED_SPOT, spot}),
    createSpot: {
        request: (spot) => ({type: CREATE_SPOT_REQUEST, spot}),
        response: (res) => ({type: CREATE_SPOT_RESPONSE, res}),
        error: (err) => ({type: CREATE_SPOT_ERROR, err})
    },
    uploadPhotograph: (photograph, callback) => ({type: UPLOAD_PHOTOGRAPH_REQUEST, photograph, callback}),
    createPhotograph: {
        request: (imgUrl) => ({type: CREATE_PHOTOGRAPH_REQUEST, imgUrl}),
        response: (res) => ({type: CREATE_PHOTOGRAPH_RESPONSE, res}),
        error: (err) => ({type: CREATE_PHOTOGRAPH_ERROR, err})
    },
    getSpotPhotographs: {
        request: (spotId) => ({type: GET_SPOT_PHOTOGRAPHS_REQUEST, spotId}),
        response: (res) => ({type: GET_SPOT_PHOTOGRAPHS_RESPONSE, res}),
        error: (err) => ({type: GET_SPOT_PHOTOGRAPHS_ERROR, err}),
    },
    resetSelectedSpotPhotographs: () => ({type: RESET_SELECTED_SPOT_PHOTOGRAPHS})
};

export default spotsActions;
