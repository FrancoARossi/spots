import React, {useEffect} from "react";
import "./MapScreen.scss";
import PropTypes from "prop-types"
import MapGL from "react-map-gl";
import Geolocator from "../../containers/Geolocator";
import SpotsMarkers from "../../../common/SpotsMarkers/SpotsMarkers";
import SearchBar from "../../../common/SearchBar/SearchBar";
import Tags from "../../../tags/containers/Tags";
import AddSpotButton from "../../../common/AddSpotButton/AddSpotButton";

const MapScreen = ({
                       viewport,
                       userPosition,
                       updateViewport,
                       updateUserPosition,
                       setSelectedSpot,
                       getSpotsRequest,
                       tagsList,
                       selectLocation,
                       onClick,
                       width,
                       height,
                       top,
                       left,
                       children,
                   }) => {
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
        alert("ERROR(" + error.code + "): " + error.message);
    };

    const positionOptions = {
        enableHighAccuracy: true,
        maximumAge: 20000,
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

    useEffect(() => {
        getSpotsRequest(userPosition, tagsList);
        setSelectedSpot(null)
        // eslint-disable-next-line
    }, [])

    const selectLocationProps = () => {
        if (selectLocation) {
            return {
                width: width,
                height: height,
                top: top,
                left: left,
                onClick: onClick,
            }
        }
    }

    return (
        <div className={"map-container"}>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle={"mapbox://styles/francoarossi/ckhe0w2rt08ff19nyff5iii23"}
                onViewportChange={onViewportChange}
                maxZoom={18}
                {...selectLocationProps()}
            >
                {!selectLocation &&
                <>
                    <AddSpotButton/>
                    <div className={"top-components-container"}>
                        <SearchBar/>
                        <Tags/>
                    </div>
                </>
                }
                {children}
                <SpotsMarkers/>
                <Geolocator/>
            </MapGL>
        </div>
    );
};

MapScreen.propTypes = {
    viewport: PropTypes.object,
    updateViewport: PropTypes.func,
    updateUserPosition: PropTypes.func,
    setSelectedSpot: PropTypes.func,
    getSpotsRequest: PropTypes.func,
    tagsList: PropTypes.array,
    userPosition: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    selectLocation: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.elementType,
}

export default MapScreen;
