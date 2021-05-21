import "./GeolocationController.scss"
import React from "react";
import PropTypes from "prop-types";
import {GeolocateControl} from "react-map-gl";

const GeolocationController = ({updateUserPosition}) => {
    const geolocate = (pos) => {
        updateUserPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
        });
    };

    const positionOptions = {
        enableHighAccuracy: true,
        maximumAge: 20000,
        timeout: 2000,
    };

    return (
        <GeolocateControl
            className={"geolocate-controller"}
            onGeolocate={geolocate}
            positionOptions={positionOptions}
            trackUserLocation={true}
            label="Center"
            auto={true}
        />
    );
};

GeolocationController.propTypes = {
    updateUserPosition: PropTypes.func
}

export default GeolocationController;
