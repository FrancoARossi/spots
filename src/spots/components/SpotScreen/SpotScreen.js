import "./SpotScreen.scss";
import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

const Spot = ({id}) => {
    const spotsList = useSelector((state) => state.spots.spotsList);
    const spot = spotsList.filter((spot) => spot.id === id)[0];

    return (
        <div className={"spot-container"}>
            <h2 className={"title"}>{spot.name}</h2>
            <div className={"content"}>
                <p>{spot.description}</p>
                <p>tags: {spot.tags.join(", ")}</p>
            </div>
        </div>
    );
};

Spot.propTypes = {
    id: PropTypes.number
}

export default Spot;
