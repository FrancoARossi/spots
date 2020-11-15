import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const spotsSlice = createSlice({
  name: "spots",
  initialState,
  reducers: {
    updateSpots(state, action) {
      state.push({
        id: action.payload.id,
        name: action.payload.name,
        descripcion: action.payload.descripcion,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      });
    },
  },
});

export const { updateSpots } = spotsSlice.actions;

export default spotsSlice.reducer;
