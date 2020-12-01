import ReactMapGL from "react-map-gl";
import { useEffect } from "react";
import GeolocatorContainer from "../../user/containers/GeolocatorContainer";
import SpotsMarkersContainer from "../../spots/containers/SpotsMarkersContainer";

const Map = ({ viewport, updateViewport, updateUserPosition }) => {
  const onViewportChange = (newViewport) => {
    updateViewport({
      latitude: newViewport.latitude,
      longitude: newViewport.longitude,
      zoom: newViewport.zoom,
    });
  };

  const successPosition = (pos) => {
    updateUserPosition({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
  };

  const errorPosition = (error) => {
    console.warn("ERROR(" + error.code + "): " + error.message);
  };

  const positionOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successPosition,
      errorPosition,
      positionOptions
    );
    // eslint-disable-next-line
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/francoarossi/ckhe0w2rt08ff19nyff5iii23"
      onViewportChange={onViewportChange}
      style={{ position: "absolute" }}
      maxZoom={18}
    >
      <GeolocatorContainer />
      <SpotsMarkersContainer />
    </ReactMapGL>
  );
};

export default Map;
