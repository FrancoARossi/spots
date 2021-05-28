import {
    GET_SPOTS_REQUEST,
    GET_SPOTS_RESPONSE,
    GET_SPOTS_ERROR,
    SET_SELECTED_SPOT,
    CREATE_SPOT_REQUEST,
    CREATE_SPOT_RESPONSE,
    CREATE_SPOT_ERROR,
    //CREATE_PHOTOGRAPH_RESPONSE,
    //CREATE_PHOTOGRAPH_ERROR,
    GET_SPOT_PHOTOGRAPHS_RESPONSE,
    RESET_SELECTED_SPOT_PHOTOGRAPHS,
} from "./spots.actions";

const initialState = {
    spotsList: [],
    selectedSpot: null,
    selectedSpotPhotographs: [],
    ui: {
        pending: {
            getSpotsPending: false,
            createSpotPending: false
        },
        error: {
            getSpotsError: false,
            createSpotError: false
        }
    }
};

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case CREATE_SPOT_REQUEST:
            return {
                ...state,
                ui: {
                    pending: {
                        ...state.ui.pending,
                        createSpotPending: true,
                    },
                    error: {
                        ...state.ui.error,
                        createSpotError: false,
                    }
                }
            }
        case CREATE_SPOT_RESPONSE:
            return {
                ...state,
                selectedSpot: action.res,
                spotsList: [...state.spotsList, action.res],
                ui: {
                    pending: {
                        ...state.ui.pending,
                        createSpotPending: false,
                    }
                }
            }
        case CREATE_SPOT_ERROR:
            return {
                ...state,
                ui: {
                    pending: {
                        ...state.ui.pending,
                        createSpotPending: false,
                    },
                    error: {
                        ...state.ui.error,
                        createSpotError: true,
                    }
                }
            }
        case GET_SPOT_PHOTOGRAPHS_RESPONSE:
            return {
                ...state,
                selectedSpotPhotographs: action.res,
            }
        case RESET_SELECTED_SPOT_PHOTOGRAPHS:
            return {
                ...state,
                selectedSpotPhotographs: []
            }
        default:
            return state;
    }
};

export default spotsReducer;
