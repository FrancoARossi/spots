import React from "react";
import "./NavBar.scss";
import {FaMapMarkedAlt} from "react-icons/fa";
import {FaListUl} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import { Button } from '@material-ui/core';

export default function NavBar() {
    const history = useHistory();

    const redirectToSpotsList = () => history.push("/spots-list");
    const redirectToMap = () => history.push("/");

    return (
        <div className={"navbar-container"}>
            <Button color="primary" className="icon" onClick={redirectToMap}>
                <FaMapMarkedAlt/>
            </Button>
            <Button color="primary" className="icon" onClick={redirectToSpotsList}>
                <FaListUl/>
            </Button>
        </div>
    );
}
