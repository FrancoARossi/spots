import actions from "../actions/actions";
import {services} from "./spots.services";
import {GET_SPOTS_REQUEST} from "./spots.actions";
import {sortSpotsByDistanceToUser} from "../utils/sortSpotsByDistanceToUser";

const filterSpotByTags = (spot, tagsList) => {
    return tagsList.some((tag) => spot.tags.includes(tag));
};

const spotsMiddleware = ({dispatch}) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_SPOTS_REQUEST:
            services.getSpots()
                .then((res) => {
                    let spotsList;
                    if (action.tagsList.length > 0) {
                        spotsList = res.filter((spot) =>
                            filterSpotByTags(spot, action.tagsList)
                        );
                        spotsList = sortSpotsByDistanceToUser(
                            spotsList,
                            action.userPosition
                        );
                    } else {
                        spotsList = sortSpotsByDistanceToUser(
                            res,
                            action.userPosition
                        );
                    }
                    dispatch(actions.spots.getSpots.response(spotsList));
                })
                .catch((err) => {
                    dispatch(actions.spots.getSpots.error(err));
                });
            break;
        default:
            return action;
    }
};

export default spotsMiddleware;
