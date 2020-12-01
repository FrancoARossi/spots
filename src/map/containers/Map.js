import { connect } from "react-redux";
import MapScreen from "../components/MapScreen";
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

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
