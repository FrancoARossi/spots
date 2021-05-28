import "./SpotsListScreen.scss";
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";
import {sortSpotsByDistanceToUser} from "../../../utils/sortSpotsByDistanceToUser";

const SpotsListScreen = ({spotsList, userPosition, setSelectedSpot}) => {
    const history = useHistory();
    const [orderedSpots, setOrderedSpots] = useState([]);

    useEffect(() => {
        setOrderedSpots(sortSpotsByDistanceToUser(
            spotsList,
            userPosition
        ))
        //eslint-disable-next-line
    }, [])

    const redirectToSpotDetails = (e, spot) => {
        e.stopPropagation();
        setSelectedSpot(spot);
        history.push(`/spot/${spot.id}`);
    }

    return (
        <Grid md={12} xs={12} className={"spots-list-container"}>
            <h1>Spots ordenados por distancia</h1>
            {orderedSpots.map((spot) => (
                <Button
                    key={spot.id}
                    onClick={(e) => redirectToSpotDetails(e, spot)}
                    variant="outlined"
                    color="primary"
                    className={"spot-button"}>
                    {`${spot.name} - ${spot.description}`}
                </Button>
            ))}
        </Grid>
    );
};

SpotsListScreen.propTypes = {
    spotsList: PropTypes.array,
    userPosition: PropTypes.object,
    setSelectedSpot: PropTypes.func,
}

export default SpotsListScreen;
