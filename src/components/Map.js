import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    width: "100vw",
    height: "100vh",
    zoom: 15,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      //TODO: Add contemplation for a denied access to position (error)
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/francoarossi/ckhe0w2rt08ff19nyff5iii23"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default Map;
