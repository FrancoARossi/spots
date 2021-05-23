import React from "react";
import "./NavBar.scss";
import {FaMapMarkedAlt} from "react-icons/fa";
import {FaListUl} from "react-icons/fa";
import {useHistory} from "react-router-dom";

export default function NavBar() {
    const history = useHistory();

    const redirectToSpotsList = () => history.push("/spots-list");
    const redirectToMap = () => history.push("/");

    return (
        <div className={"navbar-container"}>
            <button className="btn btn-lg btn-primary" onClick={redirectToMap}>
                <FaMapMarkedAlt/>
            </button>
            <button className="btn btn-lg btn-primary" onClick={redirectToSpotsList}>
                <FaListUl/>
            </button>
        </div>
    );
}
