import "./SpotsMarkers.scss"
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../actions/actions";
import {Marker, Popup} from "react-map-gl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const SpotsMarkers = ({
                          spotsList,
                          selectedSpot,
                          userPosition,
                          getSpotsRequest,
                          setSelectedSpot,
                      }) => {
    useEffect(() => {
        getSpotsRequest(userPosition);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {spotsList?.map((spot) => (
                <Marker
                    key={spot.id}
                    latitude={spot.latitude}
                    longitude={spot.longitude}
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={"marker-icon"} onClick={() => setSelectedSpot(spot)}/>
                </Marker>
            ))}
            {selectedSpot ? (
                <Popup
                    className={"popup-container"}
                    latitude={selectedSpot.latitude}
                    longitude={selectedSpot.longitude}
                    onClose={() => {
                        setSelectedSpot(null);
                    }}
                    onClick={() => {
                        setSelectedSpot(selectedSpot);
                    }}
                >
                    <h1>{selectedSpot.name}</h1>
                    <div className={"popup-description"}>
                        <p>{selectedSpot.description}</p>
                        <p>tags: {selectedSpot.tags.join(", ")}</p>
                    </div>
                </Popup>
            ) : null}
        </div>
    );
};

SpotsMarkers.propTypes = {
    spotsList: PropTypes.array,
    selectedSpot: PropTypes.object,
    userPosition: PropTypes.object,
    getSpotsRequest: PropTypes.func,
    setSelectedSpot: PropTypes.func,
}

const mapStateToProps = (state) => ({
    spotsList: state.spots.spotsList,
    selectedSpot: state.spots.selectedSpot,
    userPosition: state.map.userPosition,
});

const mapDispatchToProps = (dispatch) => ({
    getSpotsRequest: (userPosition) =>
        dispatch(actions.spots.getSpots.request(userPosition)),
    setSelectedSpot: (spot) => dispatch(actions.spots.setSelectedSpot(spot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotsMarkers);
