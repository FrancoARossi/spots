import React from 'react';
import "./AddSpotButton.scss";
import { Button } from "@material-ui/core";
import {FaPlus} from "react-icons/fa";
import { useHistory } from 'react-router-dom';

function AddSpotButton() {
  const history = useHistory();

  const redirectToAddSpotScreen = (e) => {
      e.stopPropagation();
      history.push("/add-spot");
  }
  return (
    <Button onClick={(e) => redirectToAddSpotScreen(e)} className="add-spot" color="primary" variant="contained" size="large">
      <FaPlus/>
    </Button>
  )
}

export default AddSpotButton
