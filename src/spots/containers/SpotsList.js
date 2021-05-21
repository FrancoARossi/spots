import {connect} from "react-redux";
import SpotsListScreen from "../components/SpotsListScreen/SpotsListScreen";

const mapStateToProps = (state) => ({
    spotsList: state.spots.spotsList,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SpotsListScreen);
