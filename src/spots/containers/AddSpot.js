import {connect} from "react-redux";
import AddSpotScreen from "../components/AddSpotScreen/AddSpotScreen";
import actions from "../../actions/actions";

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    createSpotRequest: (spot) => dispatch(actions.spots.createSpot.request(spot)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotScreen);
