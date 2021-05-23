import {connect} from "react-redux";
import GeolocationController from "../components/GeolocationController/GeolocationController";
import actions from "../../map/map.actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    updateUserPosition: (newPosition) => {
        dispatch(actions.updateUserPosition(newPosition));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GeolocationController);
