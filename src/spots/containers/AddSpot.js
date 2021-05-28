import {connect} from "react-redux";
import AddSpotScreen from "../components/AddSpotScreen/AddSpotScreen";
import actions from "../../actions/actions";

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    createSpotRequest: (spot) => dispatch(actions.spots.createSpot.request(spot)),
    uploadPhotograph: (photograph) => dispatch(actions.spots.uploadPhotograph(photograph)),
    createPhotograph: (imgUrl) => dispatch(actions.spots.createPhotograph.request(imgUrl)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotScreen);
