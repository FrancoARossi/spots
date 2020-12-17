import { useEffect } from "react";
import { Marker, Popup } from "react-map-gl";
//import { useHistory } from "react-router-dom";

const SpotsMarkers = ({
  spotsList,
  status,
  selectedSpot,
  userPosition,
  getSpotsRequest,
  setSelectedSpot,
}) => {
  useEffect(() => {
    if (status === "idle") {
      getSpotsRequest(userPosition, []);
    }
    // eslint-disable-next-line
  }, []);

  //const history = useHistory();

  return (
    <div>
      {spotsList.map((spot) => (
        <Marker
          key={spot.Id}
          latitude={spot.Latitude}
          longitude={spot.Longitude}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setSelectedSpot(spot);
            }}
            className="btn btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8300ff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
          latitude={selectedSpot.Latitude}
          longitude={selectedSpot.Longitude}
          onClose={() => {
            setSelectedSpot(null);
          }}
          onClick={() => {
            //console.log(history);
            setSelectedSpot(selectedSpot);
            //history.push(`/spot/${selectedSpot.Id}`);
          }}
        >
          <div
            style={{
              padding: ".25em",
              fontSize: "1.5em",
              fontWeight: "lighter",
            }}
          >
            <h1>{selectedSpot.Name}</h1>
            <div
              style={{
                fontSize: ".7em",
              }}
            >
              <p>{selectedSpot.Description}</p>
              <p>Tags: {selectedSpot.Tags.join(", ")}</p>
            </div>
          </div>
        </Popup>
      ) : null}
    </div>
  );
};

export default SpotsMarkers;
