import "./AddSpotScreen.scss";
import React, {useState, forwardRef} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Tags from "../../../tags/containers/Tags";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import Map from "../../../map/containers/Map";
import {Marker} from "react-map-gl";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddSpotScreen = () => {

    const [selectedTags, setSelectedTags] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [spotCoords, setSpotCoords] = useState(null);

    //TODO replace ugly tag logic. useEffect?
    const isSelected = (tag) => {
        return selectedTags.includes(tag);
    }

    const handleTagClick = (e, tag) => {
        e.preventDefault();
        if (isSelected(tag)) {
            setSelectedTags(selectedTags.filter((_tag) => _tag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    const onLocationSelect = (event) => setSpotCoords({
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
    });

    return (
        <>
            <div>
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}
                        TransitionComponent={Transition}>
                    <AppBar>
                        <Toolbar>
                            <IconButton edge="start" color="inherit"
                                        onClick={() => setOpenDialog(false)} aria-label="close">
                                <FontAwesomeIcon icon={faTimes}/>
                            </IconButton>
                            {!spotCoords ?
                                <span className={"dialog-header-text"}>Seleccione una ubicación en el mapa</span>
                                :
                                <span className={"dialog-header-text"}>Ubicación seleccionada</span>
                            }
                        </Toolbar>
                    </AppBar>
                    <div className={"map-container"}>
                        <Map
                            selectLocation
                            onClick={onLocationSelect}
                            width={"100%"}
                            height={"100%"}
                            top={"60px"}
                            left={"0px"}
                        >
                            {spotCoords &&
                            <Marker
                                longitude={spotCoords.longitude}
                                latitude={spotCoords.latitude}
                            >
                                <FontAwesomeIcon icon={faMapMarkerAlt}
                                                 className={"location-selected"}/>
                            </Marker>}
                        </Map>
                    </div>
                </Dialog>
            </div>
            <Grid md={5} xs={12} className="add-spot-container">
                <h1>Añadir Spot</h1>
                <form>
                    <TextField className="form-field" id="" label="Nombre"/>
                    <TextField className="form-field" id="" label="Descripción"/>
                    <Button
                        className="form-field"
                        variant="outlined"
                        color="primary"
                        component="label"
                        onClick={() => setOpenDialog(true)}
                    >
                        Seleccionar ubicación
                    </Button>
                    {spotCoords &&
                    <span>(Longitud, Latitud) = ({spotCoords.longitude}, {spotCoords.latitude})</span>}
                    <Button
                        className="form-field"
                        variant="outlined"
                        color="primary"
                        component="label"
                    >
                        Añadir fotografía
                        <input type="file" hidden/>
                    </Button>
                    <span className="tags-title">Seleccionar tags:</span>
                    <div className={"tags-center"}>
                        <Tags onClick={handleTagClick}/>
                    </div>
                    <Button className="form-field" variant="contained" color="primary">
                        Enviar
                    </Button>
                </form>
            </Grid>
        </>
    )
}


export default AddSpotScreen;
