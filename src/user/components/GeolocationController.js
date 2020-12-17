import { GeolocateControl } from "react-map-gl";

const Geolocator = ({ updateUserPosition }) => {
  const geolocate = (pos) => {
    updateUserPosition({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
  };

  const geolocateStyle = {
    position: "fixed",
    bottom: 85,
    right: 15,
  };

  const positionOptions = {
    enableHighAccuracy: true,
    maximumAge: 20000,
    timeout: 2000,
  };

  return (
    <GeolocateControl
      onGeolocate={geolocate}
      positionOptions={positionOptions}
      trackUserLocation={true}
      label="Center"
      style={geolocateStyle}
      auto={true}
    />
  );
};

export default Geolocator;
