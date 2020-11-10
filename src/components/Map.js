import React from "react";
import ReactMapGL from "react-map-gl";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lon: null,
    };
    this.successLocation = this.successLocation.bind(this);
  }

  successLocation(position) {
    this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    });
  }

  errorLocation(error) {
    console.log("Location error");
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition(
      this.successLocation,
      this.errorLocation,
      {
        enableHighAccuracy: true,
      }
    );
  }

  render() {
    this.getPosition();

    let viewport = {
      latitude: this.lat,
      longitude: this.lon,
      width: "100vw",
      height: "100vh",
      zoom: 15,
    };

    return (
      <ReactMapGL
        maxZoom={20}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport}
      >
        {}
      </ReactMapGL>
    );
  }
}

export default Map;
