import React from "react";
import "./styles/main.scss"
import Map from "./map/containers/Map";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "./common/NavBar/NavBar";
import SpotsList from "./spots/containers/SpotsList";
import SpotDetails from "./spots/containers/SpotDetails";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CssBaseline from '@material-ui/core/CssBaseline';
import AddSpot from "./spots/containers/AddSpot";

function App({spotsList}) {
    return (
        <>
        <CssBaseline/>
        <Router>
            {spotsList.map(spot => (<Link key={spot.id} to={"/spot/" + spot.id}/>))}
            <Switch>
                <Route exact path="/" component={Map}/>
                <Route path={"/spots-list"} component={SpotsList}/>
                <Route path={"/spot/:id"} component={SpotDetails}/>
                <Route path="/add-spot" component={AddSpot}/>
            </Switch>
            <NavBar/>
        </Router>
        </>
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
