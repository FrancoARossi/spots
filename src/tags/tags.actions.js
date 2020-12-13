export const UPDATE_FILTER_TAGS = "UPDATE_FILTER_TAGS";

const tags = {
  updateFilterTags: (tag) => ({
    type: UPDATE_FILTER_TAGS,
    payload: tag,
  }),
};

export default tags;
