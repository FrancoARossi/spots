import "./AddSpotScreen.scss";
import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function AddSpotScreen() {
  
  const [selectedTags, setSelectedTags] = React.useState([]);
  //TODO replace ugly tag logic. useEffect?
  function isSelected(tag) {
    return selectedTags.includes(tag);
  }
  function handleClick(e, tag) {
    e.preventDefault();
    if (isSelected(tag)) {
      setSelectedTags(selectedTags.filter((_tag) => _tag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }
  return (
    <>
      <div className="container">
        <h1>Añadir Spot</h1>
        <form>
          <TextField className="form-field" id="" label="Nombre" />
          <TextField className="form-field" id="" label="Descripción" />
          {
            // TBD ubicaion
          }
          <Button
            className="form-field"
            variant="outlined"
            color="primary"
            component="label"
          >
            Añadir fotografía
            <input type="file" hidden />
          </Button>
          <div className="tags-container">
            <span className="tags-title">Seleccionar tags:</span>
            <Button
              onClick={(e) => handleClick(e, "parque")}
              key={"parque"}
              color="primary"
              variant={isSelected("parque") ? "contained" : "outlined"}
              size="small"
              className="tag-btn"
            >
              Parque
            </Button>
            <Button
              onClick={(e) => handleClick(e, "urbano")}
              key="urbano"
              color="primary"
              variant={isSelected("urbano") ? "contained" : "outlined"}
              size="small"
              className="tag-btn"
            >
              Urbano
            </Button>
            <Button
              onClick={(e) => handleClick(e, "interior")}
              key={"interior"}
              color="primary"
              variant={isSelected("interior") ? "contained" : "outlined"}
              size="small"
              className="tag-btn"
            >
              Interior
            </Button>
            <Button
              onClick={(e) => handleClick(e, "naturaleza")}
              key={"naturaleza"}
              color="primary"
              variant={isSelected("naturaleza") ? "contained" : "outlined"}
              size="small"
              className="tag-btn"
            >
              Naturaleza
            </Button>
          </div>
          <Button className="form-field" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </div>
    </>
  )
}
