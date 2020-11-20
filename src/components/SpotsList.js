import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../slices/spotsSlice";
import "../css/SpotsList.css";
import { Link } from "react-router-dom";

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
      <ul className="spot-list">
        {spots.map((spot) => (
          <Link key={spot.id} to={`/spot/${spot.id}`}>
            <li key={spot.id}>
              <button style={{ width: "100%", marginLeft: "100%" }}>
                {spot.name}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
