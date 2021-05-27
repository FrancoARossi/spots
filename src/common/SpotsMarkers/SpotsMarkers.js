import "./SpotsMarkers.scss"
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../actions/actions";
import {Marker, Popup} from "react-map-gl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
import {capitalizeWord} from "../../utils/capitalizeWord";

const SpotsMarkers = ({
                          spotsList,
                          selectedSpot,
                          setSelectedSpot,
                      }) => {

    const history = useHistory();

    const redirectToSpotDetails = (e, spotId) => {
        e.stopPropagation();
        history.push(`/spot/${spotId}`);
    }

    const selectedSpotTags = () => {
        return [...selectedSpot.tags].map(tag => capitalizeWord(tag)).join(", ")
    }

    return (
        <div>
            {spotsList?.map((spot) => (
                <Marker
                    key={spot.id}
                    latitude={spot.latitude}
                    longitude={spot.longitude}
                >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className={"marker-icon"}
                                     onClick={() => setSelectedSpot(spot)}/>
                </Marker>
            ))}
            {selectedSpot &&
            <div>
                <Popup
                    latitude={selectedSpot.latitude}
                    longitude={selectedSpot.longitude}
                    onClose={() => setSelectedSpot(null)}
                    closeOnClick={false}
                    offsetLeft={10}
                >
                    <div className={"popup-content text-ellipsis"}>
                            <span className={"spot-name"}
                                  onClick={(e) => redirectToSpotDetails(e, selectedSpot.id)}>{selectedSpot.name}</span>
                    </div>
                </Popup>
            </div>
            }
        </div>
    );
};

SpotsMarkers.propTypes = {
    spotsList: PropTypes.array,
    selectedSpot: PropTypes.object,
    getSpotsRequest: PropTypes.func,
    setSelectedSpot: PropTypes.func,
}

const mapStateToProps = (state) => ({
    spotsList: state.spots.spotsList,
    selectedSpot: state.spots.selectedSpot,
    userPosition: state.map.userPosition,
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedSpot: (spot) => dispatch(actions.spots.setSelectedSpot(spot)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotsMarkers);
