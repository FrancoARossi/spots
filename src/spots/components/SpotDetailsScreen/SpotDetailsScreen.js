import "./SpotDetailsScreen.scss";
import React from "react";
import PropTypes from "prop-types";

const SpotDetailsScreen = ({selectedSpot}) => {
    return (
        <div className={"spot-container"}>
            <h2 className={"title"}>{selectedSpot.name}</h2>
            <div className={"content"}>
                <p>{selectedSpot.description}</p>
                <p>tags: {selectedSpot.tags.join(", ")}</p>
            </div>
        </div>
    );
};

SpotDetailsScreen.propTypes = {
    selectedSpot: PropTypes.object
}

export default SpotDetailsScreen;
