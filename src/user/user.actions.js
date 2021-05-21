export const UPDATE_USER_POSITION = "UPDATE_USER_POSITION";

const userActions = {
    updateUserPosition: (newPosition) => ({type: UPDATE_USER_POSITION, newPosition}),
};

export default userActions;
