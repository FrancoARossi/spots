import "./TagsButtons.scss"
import {Button} from '@material-ui/core';
import React, {useEffect} from "react";
import PropTypes from "prop-types";

const TagsButtons = ({
                         tagsList,
                         userPosition,
                         getSpotsRequest,
                         updateFilterTags,
                         onClick,
                         className
                     }) => {

    useEffect(() => {
        getSpotsRequest(userPosition, tagsList);
        //eslint-disable-next-line
    }, [tagsList]);

    const onClickHandle = (tag) => {
        updateFilterTags(tag);
    };

    return (
        <div className={`tags-container ${className ? className : ""}`}>
            <Button
                className="tag-btn"
                variant={tagsList.includes("parque") ? "contained" : "outlined"}
                color="primary"
                onClick={onClick ?? (() => onClickHandle("parque"))}
            >
                Parque
            </Button>
            <Button
                className="tag-btn"
                variant={tagsList.includes("urbano") ? "contained" : "outlined"}
                color="primary"
                onClick={onClick ?? (() => onClickHandle("urbano"))}
            >
                Urbano
            </Button>
            <Button
                className="tag-btn"
                variant={tagsList.includes("interior") ? "contained" : "outlined"}
                color="primary"
                onClick={onClick ?? (() => onClickHandle("interior"))}
            >
                Interior
            </Button>
            <Button
                className="tag-btn"
                variant={tagsList.includes("naturaleza") ? "contained" : "outlined"}
                color="primary"
                onClick={onClick ?? (() => onClickHandle("naturaleza"))}
            >
                Naturaleza
            </Button>
        </div>
    );
};

TagsButtons.propTypes = {
    tagsList: PropTypes.array,
    userPosition: PropTypes.object,
    getSpotsRequest: PropTypes.func,
    updateFilterTags: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

export default TagsButtons;
