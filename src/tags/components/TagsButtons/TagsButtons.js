import "./TagsButtons.scss"
import { Button } from '@material-ui/core';
import React, {useState} from "react";
import PropTypes from "prop-types";

const TagsButtons = ({
                         tagsList,
                         userPosition,
                         getSpotsRequest,
                         updateFilterTags,
                     }) => {
    const tagUnselected = "btn btn-sm btn-light";
    const tagSelected = "btn btn-sm btn-primary";
    const [buttonsState, setButtonsState] = useState({
        parque: tagUnselected,
        urbano: tagUnselected,
        interior: tagUnselected,
        naturaleza: tagUnselected,
    });

    const onClickHandle = (tag) => {
        switch (buttonsState[tag]) {
            case tagUnselected:
                setButtonsState({...buttonsState, [tag]: tagSelected});
                break;
            case tagSelected:
                setButtonsState({...buttonsState, [tag]: tagUnselected});
                break;
            default:
                break;
        }
        updateFilterTags(tag);
        getSpotsRequest(userPosition, tagsList);
    };

    return (
        <div className={"tags-container"}>
            <Button
                variant="contained"
                color="primary"
                className={buttonsState["parque"]}
                onClick={() => onClickHandle("parque")}
            >
                Parque
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={buttonsState["urbano"]}
                onClick={() => onClickHandle("urbano")}
            >
                Urbano
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={buttonsState["interior"]}
                onClick={() => onClickHandle("interior")}
            >
                Interior
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={buttonsState["naturaleza"]}
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
