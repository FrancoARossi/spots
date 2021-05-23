import React from "react";
import Map from "./map/containers/Map";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "./common/NavBar/NavBar";
import SearchBar from "./common/searchBar/SearchBar";
import Tags from "./tags/containers/Tags";
import SpotsList from "./spots/containers/SpotsList";
import SpotDetails from "./spots/containers/SpotDetails";
import {connect} from "react-redux";
import PropTypes from "prop-types";

function App({spotsList}) {
    return (
        <Router>
            {spotsList.map(spot => (<Link key={spot.id} to={"spot/" + spot.id}/>))}
            <Switch>
                <Route exact path="/">
                    <Map/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <SearchBar/>
                        <Tags/>
                    </div>
                </Route>
                <Route exact path={"/spots-list"} component={SpotsList}/>
                <Route exact path={"/spot/:id"} component={SpotDetails}/>
            </Switch>
            <NavBar/>
        </Router>
    );
}

App.propTypes = {
    spotsList: PropTypes.array,
}

const mapStateToProps = (state) => ({
    spotsList: state.spots.spotsList,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
