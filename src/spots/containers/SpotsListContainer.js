import { connect } from "react-redux";
import SpotsList from "../components/SpotsList";

const mapStateToProps = (state) => ({
  spotsList: state.spots.spotsList,
});

export default connect(mapStateToProps)(SpotsList);
