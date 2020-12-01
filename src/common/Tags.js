import React from "react";
import { Link } from "react-router-dom";

export default function Tags() {
    return (

        <div style={{ position: "fixed", width: "100%", display: "flex", justifyContent: "space-around", padding: "1em", zIndex: "10" }}>
            <Link to="/"><button className="btn btn-sm btn-light">Parque</button></Link>
            <Link to="/"><button className="btn btn-sm btn-light">Urbano</button></Link>
            <Link to="/"><button className="btn btn-sm btn-light">Interior</button></Link>
            <Link to="/"><button className="btn btn-sm btn-light">Naturaleza</button></Link>
        </div>
    );
}