import "./SpotDetailsScreen.scss";
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Carousel from 'react-elastic-carousel';

const items = [
    {
        id: 1,
        src: "https://via.placeholder.com/400x300"
    },
    {
        id: 2,
        src: "https://via.placeholder.com/400x300"
    }
]

const SpotDetailsScreen = ({selectedSpot}) => {
    return (
        <div className={"spot-container"}>
            <h2 className={"title"}>{selectedSpot?.name}</h2>
            <div className={"content"}>
                <p>{selectedSpot?.description}</p>
                {selectedSpot?.tags.map(tag => (<Button key={tag} color="primary" variant="outlined" size="small" className="tag-btn">{tag}</Button>))}
            <Carousel>
                {
                    //  TODO replace items array with selectedSpot.imgs when implemented
                }
                {items.map(item => <img key={item.id} src={item.src} className="carousel-img"></img>)}
            </Carousel>
            </div>
        </div>
    );
};

SpotDetailsScreen.propTypes = {
    selectedSpot: PropTypes.object
}

export default SpotDetailsScreen;
