import "./SpotsListScreen.scss";
import React from "react";
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";

const SpotsListScreen = ({spotsList}) => {

    const history = useHistory();

    const redirectToSpotDetails = (e, spot) => {
        e.stopPropagation();
        history.push(`/spot/${spot.id}`);
    }

    return (
        <Grid md={12} xs={12} className={"spots-list-container"}>
            <h1>Spots ordenados por distancia</h1>
            {spotsList.map((spot) => (
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
    spotsList: PropTypes.array
}

export default SpotsListScreen;
