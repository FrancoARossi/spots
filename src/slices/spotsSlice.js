import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  spotsList: [],
  status: "idle",
  error: null,
};

export const fetchSpots = createAsyncThunk(
  "spots/fetchSpots",
  async ({ proximity, userPosition }) => {
    return fetch("http://localhost:3000/spots")
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        return {
          spots: json,
          proximity: proximity,
          userPosition: userPosition,
        };
      });
  }
);

export const distanceToUser = ({ spot, userPosition }) => {
  const R = 6371;
  const omega1 = (userPosition.latitude * Math.PI) / 180;
  const omega2 = (spot.latitude * Math.PI) / 180;
  const deltaOmega = ((spot.latitude - userPosition.latitude) * Math.PI) / 180;
  const deltaLambda =
    ((spot.longitude - userPosition.longitude) * Math.PI) / 180;

  const a =
    Math.sin(deltaOmega / 2) * Math.sin(deltaOmega / 2) +
    Math.cos(omega1) *
      Math.cos(omega2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in meters
};

const spotsSlice = createSlice({
  name: "spots",
  initialState,
  reducers: {
    updateSpots(state, action) {
      state.spotsList.push({
        id: action.payload.id,
        name: action.payload.name,
        descripcion: action.payload.descripcion,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      });
    },
  },
  extraReducers: {
    [fetchSpots.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSpots.fulfilled]: (state, action) => {
      state.status = "succeded";
      if (!action.payload.proximity) {
        action.payload.spots.forEach((spot) => updateSpots(spot));
      } else {
        action.payload.spots
          .sort(
            (spot1, spot2) =>
              distanceToUser({
                spot: spot1,
                userPosition: action.payload.userPosition,
              }) -
              distanceToUser({
                spot: spot2,
                userPosition: action.payload.userPosition,
              })
          )
          .forEach((spot) => updateSpots(spot));
      }
      state.spotsList = state.spotsList.concat(action.payload.spots);
      state.status = "idle";
    },
    [fetchSpots.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { updateSpots } = spotsSlice.actions;

export default spotsSlice.reducer;
