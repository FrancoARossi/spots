import React from 'react';
import "./AddSpotButton.scss";
import { Button } from "@material-ui/core";
import {FaPlus} from "react-icons/fa";

function AddSpotButton() {
  return (
    <Button className="add-spot" color="primary" variant="contained" size="large">
      <FaPlus/>
    </Button>
  )
}

export default AddSpotButton
