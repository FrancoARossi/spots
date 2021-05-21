export const UPDATE_FILTER_TAGS = "UPDATE_FILTER_TAGS";

const tagsActions = {
    updateFilterTags: (tag) => ({
        type: UPDATE_FILTER_TAGS,
        payload: tag,
    }),
};

export default tagsActions;
