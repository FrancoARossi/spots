import React, {useEffect} from "react";
import "./MapScreen.scss";
import PropTypes from "prop-types"
import MapGL from "react-map-gl";
import Geolocator from "../../../user/containers/Geolocator";
import SpotsMarkers from "../../../common/SpotsMarkers/SpotsMarkers";
import SearchBar from "../../../common/SearchBar/SearchBar";
import Tags from "../../../tags/containers/Tags";

const MapScreen = ({viewport, updateViewport, updateUserPosition}) => {
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

        updateViewport({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            zoom: 15,
        });
    };

    const errorPosition = (error) => {
        console.warn("ERROR(" + error.code + "): " + error.message);
    };

    const positionOptions = {
        enableHighAccuracy: true,
        maximumAge: 20000,
        timeout: 2000,
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
        <div className={"map-container"}>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle={"mapbox://styles/francoarossi/ckhe0w2rt08ff19nyff5iii23"}
                onViewportChange={onViewportChange}
                maxZoom={18}
            >
                <Geolocator/>
                <SpotsMarkers/>
                <SearchBar/>
                <Tags/>
            </MapGL>
        </div>
    );
};

MapScreen.propTypes = {
    viewport: PropTypes.object,
    updateViewport: PropTypes.func,
    updateUserPosition: PropTypes.func
}

export default MapScreen;
