import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: 37.7577,
  longitude: -122.4376,
  width: "100vw",
  height: "100vh",
  zoom: 15,
};

const viewportSlice = createSlice({
  name: "viewport",
  initialState,
  reducers: {
    updateViewport(state, action) {
      const { latitude, longitude, zoom } = action.payload;
      state.latitude = latitude;
      state.longitude = longitude;
      state.zoom = zoom;
    },
  },
});

export const { updateViewport } = viewportSlice.actions;

export default viewportSlice.reducer;
