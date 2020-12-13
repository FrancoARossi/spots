import { useEffect, useState } from "react";
import { Marker, Popup } from "react-map-gl";

const SpotsMarkers = ({ spotsList, status, userPosition, getSpotsRequest }) => {
  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      getSpotsRequest(userPosition, []);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {spotsList.map((spot) => (
        <Marker
          key={spot.id}
          latitude={spot.latitude}
          longitude={spot.longitude}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedSpot(spot);
            }}
            className="btn btn-sm"
          >
            {/*TODO: Solucionar warnings del svg*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8300ff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </button>
        </Marker>
      ))}
      ;
      {selectedSpot ? (
        <Popup
          latitude={selectedSpot.latitude}
          longitude={selectedSpot.longitude}
          onClose={() => {
            setSelectedSpot(null);
          }}
        >
          <h1>{selectedSpot.name}</h1>
        </Popup>
      ) : null}
    </div>
  );
};

export default SpotsMarkers;
