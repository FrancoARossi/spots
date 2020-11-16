import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  latitude: 37.7577,
  longitude: -122.4376,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserPosition(state, action) {
      const { latitude, longitude } = action.payload;
      state.latitude = latitude;
      state.longitude = longitude;
    },
  },
});

export const { updateUserPosition } = userSlice.actions;

export default userSlice.reducer;
