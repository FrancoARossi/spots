export const UPDATE_VIEWPORT = "UPDATE_VIEWPORT";

const map = {
  updateViewport: (newViewport) => ({
    type: UPDATE_VIEWPORT,
    payload: newViewport,
  }),
};

export default map;
