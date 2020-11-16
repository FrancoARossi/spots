import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../slices/spotsSlice";

export default function SpotsList({ proximity }) {
  const spots = useSelector((state) => state.spots.spotsList);
  const fetchStatus = useSelector((state) => state.spots.status);
  const userPosition = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //TODO: fix this

  useEffect(() => {
    if (!proximity && fetchStatus === "idle") {
      dispatch(fetchSpots(proximity));
    } else if (fetchStatus === "idle") {
      dispatch(fetchSpots(proximity, userPosition));
    }
    // eslint-disable-next-line
  }, []);

  return spots.map((spot) => <div>{spot.name}</div>);
}
