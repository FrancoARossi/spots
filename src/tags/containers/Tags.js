import {connect} from "react-redux";
import TagsButtons from "../components/TagsButtons/TagsButtons";
import actions from "../../actions/actions";

const mapStateToProps = (state) => ({
    tagsList: state.tags.tagsList,
});

const mapDispatchToProps = (dispatch) => ({
    updateFilterTags: (tag) => dispatch(actions.tags.updateFilterTags(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsButtons);
