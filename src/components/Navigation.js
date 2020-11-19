import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
    return (

        <div style={{ position: "fixed", background: "#fff", bottom: "0", width: "100%", display: "flex", justifyContent: "space-around", padding: "1em", zIndex: "10"}}>
            <Link to="/"><button className="btn btn-primary">Mapa</button></Link>
            <Link to="/spotList"><button className="btn btn-primary">Lista</button></Link>
        </div>
    );
}