import {
    CLEAR_SPOTS_ERROR,
    GET_SPOTS_REQUEST,
    GET_SPOTS_RESPONSE,
    GET_SPOTS_ERROR,
    SET_SELECTED_SPOT,
} from "./spots.actions";

const initialState = {
    spotsList: [],
    selectedSpot: null,
    ui: {
        pending: {
            getSpotsPending: false,
        },
        error: {
            getSpotsError: false,
        }
    }
};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_SPOTS_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    error: {
                        getSpotsError: false,
                    }
                }
            }
        case GET_SPOTS_REQUEST:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    pending: {
                        ...state.ui.pending,
                        getSpotsPending: true,
                    },
                    error: {
                        ...state.ui.error,
                        getSpotsError: false,
                    }
                }
            };
        case GET_SPOTS_RESPONSE:
            return {
                ...state,
                spotsList: action.res,
                ui: {
                    ...state.ui,
                    pending: {
                        ...state.ui.pending,
                        getSpotsPending: false,
                    }
                }
            };
        case GET_SPOTS_ERROR:
            return {
                ...state,
                spotsList: action.res,
                ui: {
                    ...state.ui,
                    pending: {
                        ...state.ui.pending,
                        getSpotsPending: false,
                    },
                    error: {
                        ...state.ui.error,
                        getSpotsError: true,
                    }
                }
            };
        case SET_SELECTED_SPOT:
            return {...state, selectedSpot: action.spot};
        default:
            return state;
    }
};

export default spotsReducer;
