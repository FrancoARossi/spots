import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../slices/spotsSlice";
import { Link, Route, Switch } from "react-router-dom";
import Spot from "./Spot";

export default function SpotsList({ proximity }) {
  const spots = useSelector((state) => state.spots.spotsList);
  const fetchStatus = useSelector((state) => state.spots.status);
  const userPosition = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!proximity && fetchStatus === "idle") {
      dispatch(fetchSpots({ proximity: proximity }));
    } else if (fetchStatus === "idle") {
      dispatch(
        fetchSpots({ proximity: proximity, userPosition: userPosition })
      );
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
}
