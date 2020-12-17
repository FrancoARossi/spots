import { connect } from "react-redux";
import SearchBarComponent from "../components/SearchBarComponent";
import rootAction from "../../actions/rootAction";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  updateViewport: (newViewport) =>
    dispatch(rootAction.map.updateViewport(newViewport)),
  setSelectedSpot: (spot) => dispatch(rootAction.spots.setSelectedSpot(spot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
