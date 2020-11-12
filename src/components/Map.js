import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { RiWalkLine } from "react-icons/ri";

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    width: "100vw",
    height: "100vh",
    zoom: 15,
  });

  const [userPosition, setUserPosition] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
  });

  const positionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
  };

  const onViewportChange = (newViewport) => {
    setViewport({ ...newViewport });
  };

  const successPosition = (pos) => {
    setViewport({
      ...viewport,
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });

    // TODO: eliminar setUserPosition cuando se solucione el problema con setInterval
    setUserPosition({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
  };

  const errorPosition = (error) => {
    console.warn("ERROR(" + error.code + "): " + error.message);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successPosition,
      errorPosition,
      positionOptions
    );
    // eslint-disable-next-line
  }, []);

  // TODO: solucionar el setInterval para actualizar posicion por que laggea y termina crasheando
  /*
  const successUserPosition = (pos) => {
    setUserPosition({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
  };
  
  setInterval(() => {
    navigator.geolocation.getCurrentPosition(
      successUserPosition,
      errorPosition,
      positionOptions
    );
  }, 5000);
  */

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/francoarossi/ckhe0w2rt08ff19nyff5iii23"
      onViewportChange={onViewportChange}
    >
      <Marker
        latitude={userPosition.latitude}
        longitude={userPosition.longitude}
      >
        <RiWalkLine size={32} />
      </Marker>
    </ReactMapGL>
  );
}

export default Map;
