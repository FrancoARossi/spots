import "./TagsButtons.scss"
import { Button } from '@material-ui/core';
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

const TagsButtons = ({
                         tagsList,
                         userPosition,
                         getSpotsRequest,
                         updateFilterTags,
                     }) => {
    const [buttonsState, setButtonsState] = useState({
        parque: false,
        urbano: false,
        interior: false,
        naturaleza: false,
    });

    useEffect(() => {
        getSpotsRequest(userPosition, tagsList);
        //eslint-disable-next-line
    }, [tagsList]);

    const onClickHandle = (tag) => {
        setButtonsState({...buttonsState, [tag]: !buttonsState[tag]})
        updateFilterTags(tag);
    };

    return (
        <div className={"tags-container"}>
            <Button
                variant="contained"
                color="primary"
                className={`${buttonsState["parque"] ? "tag-toggled" : ""}`}
                onClick={() => onClickHandle("parque")}
            >
                Parque
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={`${buttonsState["urbano"] ? "tag-toggled" : ""}`}
                onClick={() => onClickHandle("urbano")}
            >
                Urbano
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={`${buttonsState["interior"] ? "tag-toggled" : ""}`}
                onClick={() => onClickHandle("interior")}
            >
                Interior
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={`${buttonsState["naturaleza"] ? "tag-toggled" : ""}`}
                onClick={() => onClickHandle("naturaleza")}
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
}

export default TagsButtons;
