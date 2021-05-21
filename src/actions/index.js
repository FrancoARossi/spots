import mapActions from "../map/map.actions";
import userActions from "../user/user.actions";
import spotsActions from "../spots/spots.actions";
import tagsActions from "../tags/tags.actions";

const index = {
    map: mapActions,
    user: userActions,
    spots: spotsActions,
    tags: tagsActions,
};

export default index;
