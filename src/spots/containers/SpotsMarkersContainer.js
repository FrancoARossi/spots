import { connect } from "react-redux";
import SpotsMarkers from "../components/SpotsMarkers";
import actions from "../spots.actions";

const mapStateToProps = (state) => ({
  spots: { ...state.spots },
});

const mapDispatchToProps = (dispatch) => ({
  getSpotsRequest: () => dispatch(actions.getSpotsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotsMarkers);
