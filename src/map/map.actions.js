export const UPDATE_VIEWPORT = "UPDATE_VIEWPORT";
export const UPDATE_USER_POSITION = "UPDATE_USER_POSITION";

const mapActions = {
    updateViewport: (newViewport) => ({type: UPDATE_VIEWPORT, newViewport}),
    updateUserPosition: (newPosition) => ({type: UPDATE_USER_POSITION, newPosition}),
};

export default mapActions;
