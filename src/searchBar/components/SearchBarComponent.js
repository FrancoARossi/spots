import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/AutoComplete";
import { useSelector } from "react-redux";

const SearchBar = ({ updateViewport, setSelectedSpot }) => {
  let spots = useSelector((state) => state.spots.spotsList);

  return (
    <Autocomplete
      style={{
        position: "relative",
        marginTop: "10px",
        zIndex: 20,
      }}
      id="combo-box-demo"
      options={spots}
      autoHighlight={true}
      clearOnEscape={true}
      getOptionLabel={(spot) => spot.Name}
      onChange={(e, spot) => {
        e.preventDefault();
        setSelectedSpot(spot);
        updateViewport({
          latitude: spot.Latitude,
          longitude: spot.Longitude,
          zoom: 15,
        });
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Spots..."
          style={{ backgroundColor: "white" }}
          variant="outlined"
        />
      )}
    />
  );
};

export default SearchBar;
