import "./SpotsListScreen.scss";
import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SpotsListScreen = ({spotsList}) => {
    const spots = spotsList;

    return (
        <div className={"spots-list-container"}>
            {spots.map((spot) => (
                <div key={spot.id}>
                    <Link to={`/spot/${spot.id}`}>
                        <button
                            className={"btn btn-lg btn-primary spot-button"}
                        >
                            {spot.name}
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

SpotsListScreen.propTypes = {
    spotsList: PropTypes.array
}

export default SpotsListScreen;
