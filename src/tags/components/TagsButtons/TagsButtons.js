import "./TagsButtons.scss"
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
            <button
                className={buttonsState["parque"]}
                onClick={() => onClickHandle("parque")}
            >
                Parque
            </button>
            <button
                className={buttonsState["urbano"]}
                onClick={() => onClickHandle("urbano")}
            >
                Urbano
            </button>
            <button
                className={buttonsState["interior"]}
                onClick={() => onClickHandle("interior")}
            >
                Interior
            </button>
            <button
                className={buttonsState["naturaleza"]}
                onClick={() => onClickHandle("naturaleza")}
            >
                Naturaleza
            </button>
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
