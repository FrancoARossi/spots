import actions from "../actions/actions";
import {services} from "./spots.services";
import {
    GET_SPOTS_REQUEST,
    CREATE_SPOT_REQUEST,
    UPLOAD_PHOTOGRAPH_REQUEST,
    CREATE_PHOTOGRAPH_REQUEST,
} from "./spots.actions";

const filterSpotByTags = (spot, tagsList) => {
    return tagsList.every((tag) => spot.tags.includes(tag));
};

const spotsMiddleware = ({dispatch, getState}) => (next) => (action) => {
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
                    } else {
                        spotsList = res;
                    }
                    dispatch(actions.spots.getSpots.response(spotsList));
                })
                .catch((err) => {
                    dispatch(actions.spots.getSpots.error(err));
                });
            break;
        case CREATE_SPOT_REQUEST:
            services.createSpot(action.spot)
                .then((res) => dispatch(actions.spots.createSpot.response(res)))
                .catch((err) => dispatch(actions.spots.createSpot.error(err)))
            break;
        case UPLOAD_PHOTOGRAPH_REQUEST:
            services.uploadPhotograph(action.photograph)
                .then((res) => action.callback(res.url_viewer))
                .catch((err) => console.log({error: UPLOAD_PHOTOGRAPH_REQUEST, err}))
            break;
        case CREATE_PHOTOGRAPH_REQUEST:
            services.createPhotograph(action.imgUrl, getState().spots.selectedSpot.id)
                .then((res) => dispatch(actions.spots.createPhotograph.response(res)))
                .catch((err) => console.log({error: CREATE_PHOTOGRAPH_REQUEST, err}))
            break;
        default:
            return action;
    }
};

export default spotsMiddleware;
