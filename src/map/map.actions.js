export const UPDATE_VIEWPORT = "UPDATE_VIEWPORT";

const mapActions = {
    updateViewport: (newViewport) => ({
        type: UPDATE_VIEWPORT,
        payload: newViewport,
    }),
};

export default mapActions;
