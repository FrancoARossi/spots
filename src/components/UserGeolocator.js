import { GeolocateControl } from "react-map-gl";
import { updateUserPosition } from "../slices/userSlice";
import { useDispatch } from "react-redux";

export default function Geolocator() {
  const dispatch = useDispatch();

  const onGeolocate = (pos) => {
    dispatch(
      updateUserPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      })
    );
  };

  const geolocateStyle = {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 30,
  };

  return (
    <GeolocateControl
      onGeolocate={onGeolocate}
      trackUserLocation={true}
      label="Center"
      style={geolocateStyle}
    />
  );
}
