import { connect } from "react-redux";
import SpotsList from "../components/SpotsList";
import actions from "../spots.actions";

const mapStateToProps = (state) => ({
  spots: { ...state.spots },
  user: { ...state.user },
});

const mapDispatchToProps = (dispatch) => ({
  getSpotsRequest: () => dispatch(actions.getSpotsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotsList);
