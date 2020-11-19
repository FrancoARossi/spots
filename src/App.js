import React from "react";
import "./css/App.css";
import Map from "./components/Map";
import Logo from "./components/Logo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Tags from "./components/Tags";

function App() {
  return (
    <div>
      <Router>
        <Tags />
        <Switch>
          <Route path="/" exact>
            <Map />
          </Route>
          <Route path="/spotList">
            {/* spotList component */}
          </Route>
          {/* <Route path={`/spot/${spot.id}`}>
          </Route> */}
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
