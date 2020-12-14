import actions from "../actions/rootAction";
import { services } from "./spots.services";
import { GET_SPOTS_REQUEST } from "./spots.actions";
import { distanceToUser } from "../utils/distanceToUser";

const sortSpotsByDistanceToUser = (spotsList, userPosition) => {
  return spotsList.sort(
    (spot1, spot2) =>
      distanceToUser({
        spot: spot1,
        userPosition: userPosition,
      }) -
      distanceToUser({
        spot: spot2,
        userPosition: userPosition,
      })
  );
};

const filterSpotByTags = (spot, tagsList) => {
  return tagsList.every((tag) => spot.tags.includes(tag));
};

const spotsMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_SPOTS_REQUEST:
      services
        .getSpots()
        .then((response) => {
          var spotsList = [];
          if (action.payload.tagsList) {
            spotsList = response.filter((spot) =>
              filterSpotByTags(spot, action.payload.tagsList)
            );
            spotsList = sortSpotsByDistanceToUser(
              spotsList,
              action.payload.userPosition
            );
          } else {
            spotsList = sortSpotsByDistanceToUser(
              response,
              action.payload.userPosition
            );
          }
          dispatch(actions.spots.getSpotsResponse(spotsList));
        })
        .catch((error) => {
          console.log(error);
          dispatch(actions.spots.getSpotsError(error));
        });
      break;
    default:
      return action;
  }
};

export default spotsMiddleware;
