import { useDispatch, useSelector } from "react-redux";
import { updateViewport } from "../../slices/viewportSlice";
import { useEffect } from "react";
import ReactMapGL from "react-map-gl";
import Geolocator from "./Geolocator";

export default function Map() {
  const dispatch = useDispatch();

  const viewport = useSelector((state) => state.viewport);

  const onViewportChange = (pos) => {
    dispatch(
      updateViewport({
        latitude: pos.latitude,
        longitude: pos.longitude,
        zoom: pos.zoom,
      })
    );
  };

  const successPosition = (pos) => {
    dispatch(
      updateViewport({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 15,
      })
    );
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
    >
      <Geolocator />
    </ReactMapGL>
  );
}
