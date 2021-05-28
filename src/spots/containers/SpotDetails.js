import {connect} from "react-redux";
import SpotDetailsScreen from "../components/SpotDetailsScreen/SpotDetailsScreen";

const mapStateToProps = (state) => ({
    selectedSpot: state.spots.selectedSpot,
    photographs: state.spots.photographs,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetailsScreen);
