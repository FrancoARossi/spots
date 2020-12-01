import { connect } from "react-redux";
import Markers from "../components/Markers";
import actions from "../spots.actions";

const mapStateToProps = (state) => ({
  spotsList: state.spots.spotsList,
  status: state.spots.status,
  userPosition: { ...state.user },
});

const mapDispatchToProps = (dispatch) => ({
  getSpotsRequest: (userPosition) =>
    dispatch(actions.getSpotsRequest(userPosition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Markers);
