import React from "react";
import "./css/App.css";
import Map from "./components/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Tags from "./components/Tags";
import SpotsList from "./components/SpotsList";
import { useSelector } from "react-redux";
import Spot from "./components/Spot";

function App() {
  const spots = useSelector((state) => state.spots.spotsList);

  return (
    <div>
      <Router>
        <Tags />
        <Switch>
          <Route path="/" exact>
            <Map />
          </Route>
          <Route path="/spotList">
            <SpotsList proximity={true} />
          </Route>
          {spots.map((spot) => (
            <Route
              path={`/spot/${spot.id}`}
              component={() => <Spot id={spot.id} />}
            />
          ))}
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
