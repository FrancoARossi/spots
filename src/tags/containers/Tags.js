import {connect} from "react-redux";
import TagsButtons from "../components/TagsButtons/TagsButtons";
import index from "../../actions";

const mapStateToProps = (state) => ({
    tagsList: state.tags.tagsList,
    userPosition: {...state.user},
});

const mapDispatchToProps = (dispatch) => ({
    getSpotsRequest: (userPosition, tags) =>
        dispatch(index.spots.getSpotsRequest(userPosition, tags)),
    updateFilterTags: (tag) => dispatch(index.tags.updateFilterTags(tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagsButtons);
