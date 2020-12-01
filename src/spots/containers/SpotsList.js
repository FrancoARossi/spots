import { connect } from "react-redux";
import SpotsListScreen from "../components/SpotsListScreen";

const mapStateToProps = (state) => ({
  spotsList: state.spots.spotsList,
});

export default connect(mapStateToProps)(SpotsListScreen);
