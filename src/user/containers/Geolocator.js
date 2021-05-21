import {connect} from "react-redux";
import GeolocationController from "../components/GeolocationController/GeolocationController";
import actions from "../user.actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    updateUserPosition: (newPosition) => {
        dispatch(actions.updateUserPosition(newPosition));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GeolocationController);
