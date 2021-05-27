import {connect} from "react-redux";
import MapScreen from "../components/MapScreen/MapScreen";
import actions from "../../actions/actions";

const mapStateToProps = (state) => ({
    viewport: state.map.viewport,
    tagsList: state.tags.tagsList,
    userPosition: state.map.userPosition,
});

const mapDispatchToProps = (dispatch) => ({
    updateViewport: (newViewport) =>
        dispatch(actions.map.updateViewport(newViewport)),
    updateUserPosition: (newPosition) =>
        dispatch(actions.map.updateUserPosition(newPosition)),
    setSelectedSpot: (spot) => dispatch(actions.spots.setSelectedSpot(spot)),
    getSpotsRequest: (userPosition, tagsList) => dispatch(actions.spots.getSpots.request(userPosition, tagsList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
