import { connect } from "react-redux";
import Map from "../components/Map";
import actions from "../map.actions";

const mapStateToProps = (state) => ({
  ...state.map,
});

const mapDispatchToProps = (dispatch) => ({
  updateViewport: (newViewport) =>
    dispatch(actions.updateViewport(newViewport)),
  updateUserPosition: (newPosition) =>
    dispatch(actions.updateUserPosition(newPosition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
