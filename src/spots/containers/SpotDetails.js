import {connect} from "react-redux";
import SpotDetailsScreen from "../components/SpotDetailsScreen/SpotDetailsScreen";

const mapStateToProps = (state) => ({
    selectedSpot: state.spots.selectedSpot,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetailsScreen);
