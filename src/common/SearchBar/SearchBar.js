import "./SearchBar.scss"
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../actions/actions";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchBar = ({spotsList, updateViewport, setSelectedSpot}) => {
    const onChange = (e, spot) => {
        e.preventDefault();
        setSelectedSpot(spot);
        updateViewport({
            latitude: spot.latitude,
            longitude: spot.longitude,
            zoom: 15,
        });
    }

    return (
        <Autocomplete
            className={"search-bar"}
            id="combo-box-demo"
            options={spotsList}
            autoHighlight={true}
            clearOnEscape={true}
            getOptionLabel={(spot) => spot.name}
            onChange={(e, spot) => onChange(e, spot)}
            noOptionsText={"Ningún spot coincide con su búsqueda"}
            renderInput={(params) => (
                <TextField
                {...params}
                className={"search-bar-input"}
                label="Buscar Spots..."
                variant="outlined"
                />
            )}/>
    );
}

SearchBar.propTypes = {
    spotsList: PropTypes.array,
    updateViewport: PropTypes.func,
    setSelectedSpot: PropTypes.func,
}


const mapStateToProps = (state) => ({
    spotsList: state.spots.spotsList,
})

const mapDispatchToProps = (dispatch) => ({
    updateViewport: (newViewport) =>
        dispatch(actions.map.updateViewport(newViewport)),
    setSelectedSpot: (spot) => dispatch(actions.spots.setSelectedSpot(spot)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
