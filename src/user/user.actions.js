export const UPDATE_USER_POSITION = "UPDATE_USER_POSITION";

const user = {
  updateUserPosition: (newPosition) => ({
    type: UPDATE_USER_POSITION,
    payload: newPosition,
  }),
};

export default user;
