import "./SpotsListScreen.scss";
import React from "react";
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";

const SpotsListScreen = ({spotsList}) => {
    return (
        <div className={"spots-list-container"}>
            {spotsList.map((spot) => (
                    <Button
                        key={spot.id}
                        variant="outlined"
                        color="primary"
                        className={"spot-button"}>
                        {spot.name}
                    </Button>
            ))}
        </div>
    );
};

SpotsListScreen.propTypes = {
    spotsList: PropTypes.array
}

export default SpotsListScreen;
