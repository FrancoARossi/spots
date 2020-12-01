import { connect } from "react-redux";
import Geolocator from "../components/Geolocator";
import actions from "../user.actions";

const mapDispatchToProps = (dispatch) => ({
  updateUserPosition: (newPosition) =>
    dispatch(actions.updateUserPosition(newPosition)),
});

export default connect(mapDispatchToProps)(Geolocator);
