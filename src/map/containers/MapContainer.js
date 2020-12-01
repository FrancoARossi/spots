import { connect } from "react-redux";
import Map from "../components/Map";
import rootAction from "../../actions/rootAction";

const mapStateToProps = (state) => ({
  viewport: { ...state.map },
});

const mapDispatchToProps = (dispatch) => ({
  updateViewport: (newViewport) =>
    dispatch(rootAction.map.updateViewport(newViewport)),
  updateUserPosition: (newPosition) =>
    dispatch(rootAction.user.updateUserPosition(newPosition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
