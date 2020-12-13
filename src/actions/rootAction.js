import map from "../map/map.actions";
import user from "../user/user.actions";
import spots from "../spots/spots.actions";
import tags from "../tags/tags.actions";

const rootAction = {
  map,
  user,
  spots,
  tags,
};

export default rootAction;
