import {connect} from "react-redux";
import SpotDetailsScreen from "../components/SpotDetailsScreen/SpotDetailsScreen";
import actions from "../../actions/actions";

const mapStateToProps = (state) => ({
    selectedSpot: state.spots.selectedSpot,
    selectedSpotPhotographs: state.spots.selectedSpotPhotographs,
})

const mapDispatchToProps = (dispatch) => ({
    getSpotPhotographs: (spotId) => dispatch(actions.spots.getSpotPhotographs.request(spotId)),
    resetSelectedSpotPhotographs: () => dispatch(actions.spots.resetSelectedSpotPhotographs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetailsScreen);
