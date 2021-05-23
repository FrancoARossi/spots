import {UPDATE_FILTER_TAGS} from "./tags.actions";

const initialState = {
    tagsList: [],
};

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER_TAGS:
            if (state.tagsList.includes(action.tag)) {
                let indexOfTag = state.tagsList.indexOf(action.tag);
                let newTagsList = [...state.tagsList];
                newTagsList.splice(indexOfTag, 1);

                return {
                    ...state,
                    tagsList: newTagsList
                };
            } else {
                return {
                    ...state,
                    tagsList: [...state.tagsList, action.tag]
                };
            }
        default:
            return state;
    }
};

export default tagsReducer;
