import { connect } from "react-redux";
import Markers from "../components/Markers";
import actions from "../spots.actions";

const mapStateToProps = (state) => ({
  spotsList: state.spots.spotsList,
  status: state.spots.status,
  selectedSpot: state.spots.selectedSpot,
  userPosition: { ...state.user },
});

const mapDispatchToProps = (dispatch) => ({
  getSpotsRequest: (userPosition) =>
    dispatch(actions.getSpotsRequest(userPosition)),
  setSelectedSpot: (spot) => dispatch(actions.setSelectedSpot(spot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Markers);
