import "./SpotDetailsScreen.scss";
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Carousel from 'react-elastic-carousel';

const SpotDetailsScreen = ({selectedSpot, photographs}) => {
    return (
        <div className={"spot-container"}>
            <h2 className={"title"}>{selectedSpot?.name}</h2>
            <div className={"content"}>
                <p>{selectedSpot?.description}</p>
                {selectedSpot?.tags.map(tag => (
                    <Button key={tag} color="primary" variant="outlined" size="small"
                            className="tag-btn">{tag}</Button>))}
                {photographs.some(photo => photo.id === selectedSpot.id) &&
                <Carousel isRTL={false}>
                    {photographs.map((photo, index) => photo.spotId === selectedSpot.id &&
                        <img alt={"Spot Photograph"} key={index} src={photo.url}
                             className="carousel-img"/>)}
                </Carousel>}
            </div>
        </div>
    );
};

SpotDetailsScreen.propTypes = {
    selectedSpot: PropTypes.object,
    photographs: PropTypes.array,
}

export default SpotDetailsScreen;
