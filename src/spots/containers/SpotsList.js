import {connect} from "react-redux";
import SpotsListScreen from "../components/SpotsListScreen/SpotsListScreen";
import actions from "../../actions/actions";

const mapStateToProps = (state) => ({
    spotsList: state.spots.spotsList,
    userPosition: state.map.userPosition,
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedSpot: (spot) => dispatch(actions.spots.setSelectedSpot(spot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotsListScreen);
