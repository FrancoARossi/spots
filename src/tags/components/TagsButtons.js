import React from "react";

const Tags = ({
  tagsList,
  userPosition,
  getSpotsRequest,
  updateFilterTags,
}) => {
  const onClickHandle = (tag) => {
    updateFilterTags(tag);
    getSpotsRequest(userPosition, tagsList);
  };

  //TODO: Tags should change color when activated
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
        className="btn btn-sm btn-light"
        onClick={() => onClickHandle("parque")}
      >
        Parque
      </button>
      <button
        className="btn btn-sm btn-light"
        onClick={() => onClickHandle("urbano")}
      >
        Urbano
      </button>
      <button
        className="btn btn-sm btn-light"
        onClick={() => onClickHandle("interior")}
      >
        Interior
      </button>
      <button
        className="btn btn-sm btn-light"
        onClick={() => onClickHandle("naturaleza")}
      >
        Naturaleza
      </button>
    </div>
  );
};

export default Tags;
