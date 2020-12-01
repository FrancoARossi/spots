import actions from "../actions/rootAction";
import { services } from "./spots.services";
import { GET_SPOTS_REQUEST } from "./spots.actions";
import { distanceToUser } from "../common/DistanceToUser";

const orderSpotsByDistanceToUser = (spotsList, userPosition) => {
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

const spotsMiddleware = ({ dispatch }) => (next) => (action) => {
  //FIXME: Map pasa 2 veces por el middleware con un solo dispatch y la segunda vez el action es undefined (?)
  console.log(action);
  next(action);
  switch (action.type) {
    case GET_SPOTS_REQUEST:
      services
        .getSpots()
        .then((response) => {
          let spotsList = orderSpotsByDistanceToUser(response, action.payload);
          dispatch(actions.spots.getSpotsResponse(spotsList));
        })
        .catch((error) => {
          dispatch(actions.spots.getSpotsError(error));
        });
      break;
    default:
      return;
  }
};

export default spotsMiddleware;
