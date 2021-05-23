import {connect} from "react-redux";
import MapScreen from "../components/MapScreen/MapScreen";
import actions from "../../actions/actions";

const mapStateToProps = (state) => ({
    viewport: state.map.viewport,
});

const mapDispatchToProps = (dispatch) => ({
    updateViewport: (newViewport) =>
        dispatch(actions.map.updateViewport(newViewport)),
    updateUserPosition: (newPosition) =>
        dispatch(actions.map.updateUserPosition(newPosition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
