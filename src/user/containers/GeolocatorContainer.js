import { connect } from "react-redux";
import Geolocator from "../components/Geolocator";
import actions from "../user.actions";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateUserPosition: (newPosition) => {
    dispatch(actions.updateUserPosition(newPosition));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Geolocator);
