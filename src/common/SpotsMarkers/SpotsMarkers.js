import "./SpotsMarkers.scss"
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../actions/actions";
import {Marker, Popup} from "react-map-gl";

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
                    {/*TODO: usar button de material ui y react font awesome para el icono*/}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedSpot(spot);
                        }}
                        className="btn btn-sm"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8300ff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                                d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                    </button>
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
