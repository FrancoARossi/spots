import React from "react";
import "./styles/App.css";
import Map from "./map/containers/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import Tags from "./tags/containers/Tags";
import SpotsList from "./spots/containers/SpotsList";
import { useSelector } from "react-redux";
import SpotScreen from "./spots/components/SpotScreen";
import SearchBar from "./searchBar/containers/SearchBar";

function App() {
  const spots = useSelector((state) => state.spots.spotsList);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Map />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SearchBar />
              <Tags />
            </div>
          </Route>
          <Route exact path="/spotList">
            <SpotsList />
          </Route>
          {spots.map((spot) => (
            <Route exact path={`/spot/${spot.Id}`} key={spot.Id}>
              <SpotScreen id={spot.Id} />
            </Route>
          ))}
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
