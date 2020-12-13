import React, { useState } from "react";

const Tags = ({
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
        setButtonsState({ ...buttonsState, [tag]: tagSelected });
        break;
      case tagSelected:
        setButtonsState({ ...buttonsState, [tag]: tagUnselected });
        break;
      default:
        break;
    }
    updateFilterTags(tag);
    getSpotsRequest(userPosition, tagsList);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: "1em",
        zIndex: "10",
      }}
    >
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

export default Tags;
