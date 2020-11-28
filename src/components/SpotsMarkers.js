import { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl";
//import { GiPositionMarker } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../slices/spotsSlice";

export default function SpotsMarkers({ proximity }) {
  const spots = useSelector((state) => state.spots.spotsList);
  const fetchStatus = useSelector((state) => state.spots.status);
  const userPosition = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const[selectedSpot, setSelectedSpot] = useState(null);

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
        <Marker key={spot.id} latitude={spot.latitude} longitude={spot.longitude}>
          {/* <GiPositionMarker key={spot.id} size={30} /> */}
          <button onClick={(e) => {
            e.preventDefault();
            setSelectedSpot(spot);
          }} className="btn btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8300ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
          </button>
        </Marker>
      ))};
      {selectedSpot ? (
        <Popup latitude={selectedSpot.latitude} longitude={selectedSpot.longitude}
          onClose={() => {setSelectedSpot(null);}}>
            <h1>{selectedSpot.name}</h1>
        </Popup>
      ) : null }
  </div>
  )
}