import "./SearchBar.scss"
import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../actions";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchBar = ({spots, updateViewport, setSelectedSpot}) => {
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
            options={spots}
            autoHighlight={true}
            clearOnEscape={true}
            getOptionLabel={(spot) => spot.name}
            onChange={(e, spot) => onChange(e, spot)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    className={"search-bar-input"}
                    label="Search Spots..."
                    variant="outlined"
                />
            )}
        />
    );
}

SearchBar.propTypes = {
    spots: PropTypes.array,
    updateViewport: PropTypes.func,
    setSelectedSpot: PropTypes.func,
}

const mapStateToProps = (state) => ({
    spots: state.spots.spotsList
})

const mapDispatchToProps = (dispatch) => ({
    updateViewport: (newViewport) =>
        dispatch(actions.map.updateViewport(newViewport)),
    setSelectedSpot: (spot) => dispatch(actions.spots.setSelectedSpot(spot)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
