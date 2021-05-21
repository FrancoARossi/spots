import {UPDATE_FILTER_TAGS} from "./tags.actions";

const initialState = {
    tagsList: [],
};

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER_TAGS:
            const i = state.tagsList.indexOf(action.payload);
            if (i === -1) {
                return { ...state, tagsList: [...state.tagsList, action.payload] };
            } else {
                state.tagsList.splice(i, 1); //TODO: Maybe find another way to do this without mutating the state
                return {...state};
            }
        default:
            return state;
    }
};

export default tagsReducer;
