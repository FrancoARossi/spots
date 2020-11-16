import { useEffect } from "react";
import { Marker } from "react-map-gl";
import { GiPositionMarker } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../slices/spotsSlice";

export default function SpotsMarkers({ proximity }) {
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

  return spots.map((spot) => (
    <Marker key={spot.id} latitude={spot.latitude} longitude={spot.longitude}>
      <GiPositionMarker key={spot.id} size={30} />
    </Marker>
  ));
}
