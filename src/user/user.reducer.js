import {UPDATE_USER_POSITION} from "./user.actions";

let initialState = {
    position: {
        latitude: 37.7577,
        longitude: -122.4376,
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_POSITION: {
            return {
                ...state,
                position: {
                    latitude: action.latitude,
                    longitude: action.longitude,
                }
            };
        }
        default:
            return state;
    }
};

export default userReducer;
