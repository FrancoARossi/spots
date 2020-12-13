import { GeolocateControl } from "react-map-gl";

const Geolocator = ({ updateUserPosition }) => {
  const geolocate = (pos) => {
    updateUserPosition({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
  };

  const geolocateStyle = {
    position: "absolute",
    bottom: 85,
    right: 15,
  };

  return (
    <GeolocateControl
      onGeolocate={geolocate}
      positionOptions={{ enableHighAccuracy: true }}
      trackUserLocation={true}
      label="Center"
      style={geolocateStyle}
      auto={true}
    />
  );
};

export default Geolocator;
