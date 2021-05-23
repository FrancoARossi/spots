import "./SpotsListScreen.scss";
import React from "react";
import PropTypes from "prop-types";

const SpotsListScreen = ({spotsList}) => {
    console.log(spotsList);
    return (
        <div className={"spots-list-container"}>
            {spotsList.map((spot) => (
                <div key={spot.id}>
                    <button
                        className={"btn btn-lg btn-primary spot-button"}
                    >
                        {spot.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

SpotsListScreen.propTypes = {
    spotsList: PropTypes.array
}

export default SpotsListScreen;
