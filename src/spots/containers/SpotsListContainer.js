import { connect } from "react-redux";
import SpotsList from "../components/SpotsList";

const mapStateToProps = (state) => ({
  spots: { ...state.spots },
});

export default connect(mapStateToProps)(SpotsList);
