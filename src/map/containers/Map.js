import {connect} from "react-redux";
import MapScreen from "../components/MapScreen/MapScreen";
import index from "../../actions";

const mapStateToProps = (state) => ({
    viewport: {...state.map},
});

const mapDispatchToProps = (dispatch) => ({
    updateViewport: (newViewport) =>
        dispatch(index.map.updateViewport(newViewport)),
    updateUserPosition: (newPosition) =>
        dispatch(index.user.updateUserPosition(newPosition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
