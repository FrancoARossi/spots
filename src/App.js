import React from "react";
import "./styles/App.css";
import MapContainer from "./map/containers/MapContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import Tags from "./common/Tags";
import SpotsListContainer from "./spots/containers/SpotsListContainer";
import { useSelector } from "react-redux";
import Spot from "./spots/components/Spot";

function App() {
  const spots = useSelector((state) => state.spots.spotsList);

  return (
    <div>
      <Router>
        <Tags />
        <Switch>
          <Route exact path="/">
            <MapContainer />
          </Route>
          <Route exact path="/spotList">
            <SpotsListContainer />
          </Route>
          {spots.map((spot) => (
            <Route exact path={`/spot/${spot.id}`} key={spot.id}>
              <Spot id={spot.id} />
            </Route>
          ))}
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
