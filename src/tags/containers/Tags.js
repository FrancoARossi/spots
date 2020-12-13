import { connect } from "react-redux";
import TagsButtons from "../components/TagsButtons";
import rootAction from "../../actions/rootAction";

const mapStateToProps = (state) => ({
  tagsList: state.tags.tagsList,
  userPosition: { ...state.user },
});

const mapDispatchToProps = (dispatch) => ({
  getSpotsRequest: (userPosition, tags) =>
    dispatch(rootAction.spots.getSpotsRequest(userPosition, tags)),
  updateFilterTags: (tag) => dispatch(rootAction.tags.updateFilterTags(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsButtons);
