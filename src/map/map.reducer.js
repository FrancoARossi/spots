import {UPDATE_VIEWPORT, UPDATE_USER_POSITION} from "./map.actions";

const initialState = {
    viewport: {
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 15,
        width: "100%",
        height: "100%",
    },
    userPosition: {
        latitude: 37.7577,
        longitude: -122.4376,
    }
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VIEWPORT: {
            return {
                ...state,
                viewport: {
                    ...state.viewport,
                    latitude: action.newViewport.latitude,
                    longitude: action.newViewport.longitude,
                    zoom: action.newViewport.zoom,
                }
            };
        }
        case UPDATE_USER_POSITION: {
            return {
                ...state,
                userPosition: {
                    latitude: action.latitude,
                    longitude: action.longitude,
                }
            };
        }
        default:
            return state;
    }
};

export default mapReducer;
