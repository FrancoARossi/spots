import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 15,
  });

  return (
    <ReactMapGL
      {...viewport}
      maxZoom="20"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      {}
    </ReactMapGL>
  );
}

export default Map;
