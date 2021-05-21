import React from "react";
import {Link} from "react-router-dom";
import {FaMapMarkedAlt} from "react-icons/fa";
import {FaListUl} from "react-icons/fa";

export default function Navigation() {
    return (
        <div
            style={{
                position: "fixed",
                background: "#fff",
                bottom: "0",
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                padding: "1em",
                zIndex: "10",
            }}
        >
            <Link to="/">
                <button className="btn btn-lg btn-primary">
                    <FaMapMarkedAlt/>
                </button>
            </Link>
            <Link to="/spotList">
                <button className="btn btn-lg btn-primary">
                    <FaListUl/>
                </button>
            </Link>
        </div>
    );
}
