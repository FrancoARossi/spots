import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SpotsList = ({ state, getSpotsRequest }) => {
  const spots = state.spots.spotsList;
  const status = state.spots.status;
  const userPosition = state.user;

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getSpotsRequest(userPosition));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {spots.map((spot) => (
        <div>
          <Link key={spot.id} to={`/spot/${spot.id}`}>
            <button
              style={{
                zIndex: "10",
                justifyContent: "space-evenly",
                alignContent: "center",
                position: "relative",
                left: "50%",
                textAlign: "center",
              }}
              className="btn btn-lg btn-primary"
              key={spot.id}
            >
              {spot.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SpotsList;
