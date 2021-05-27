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
import {Grid} from "@material-ui/core";
//TODO: Fix popup grid dimensions and find a way to display the images
import logo from "../../assets/logo.png";

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
                        <Grid container>
                            <Grid item xs={6} className={"spot-description"}>
                                    <span
                                        className={"multi-line-text-ellipsis"}>{selectedSpot.description}<br/></span>
                                <br/>
                                <span
                                    className={"multi-line-text-ellipsis"}>Tags: {selectedSpotTags()}</span>
                            </Grid>
                            <Grid item xs={6} className={"spot-images"}>
                                <img src={logo} alt={"image-test"} width={200} height={200}/>
                            </Grid>
                        </Grid>
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
