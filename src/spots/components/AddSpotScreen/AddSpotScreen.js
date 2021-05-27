import "./AddSpotScreen.scss";
import React, {useState, forwardRef} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Tags from "../../../tags/containers/Tags";
import Slide from '@material-ui/core/Slide';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Map from "../../../map/containers/Map";
import {Marker} from "react-map-gl";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {object} from 'yup';
import FullScreenDialog from "../../../common/FullScreenDialog/FullScreenDialog";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddSpotScreen = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [spotCoords, setSpotCoords] = useState(null);
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        longitude: null,
        latitude: null,
        images: null,
        tags: []
    });

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

    const headerTextComponent = () => {
        return (
            !spotCoords ?
                <span className={"dialog-header-text"}>Seleccione una ubicación en el mapa</span>
                :
                <span className={"dialog-header-text"}>Ubicación seleccionada</span>
        )
    }

    const onFormSubmit = () => {
        console.log("SUBMIT!")
    }

    return (
        <>
            <FullScreenDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                transitionComponent={Transition}
                headerTextComponent={headerTextComponent}
                className={"map-container"}
            >
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
            </FullScreenDialog>
            <Formik
                initialValues={{
                    ...formValues
                }}
                validationSchema={
                    object({
                        name: yup.string().required("Debe introducir un nombre"),
                        description: yup.string().required("Debe ingresar una pequeña descripción"),
                        longitude: yup.number().required("Debe seleccionar la ubicación"),
                        latitude: yup.number().required("Debe seleccionar la ubicación"),
                        images: yup.array(),
                        tags: yup.array().required("Debe seleccionar al menos un tag"),
                    })
                }
                onSubmit={onFormSubmit}
            >
                {({errors, values, touched, setFieldValue, setFieldTouched, submitForm}) => (
                    <Form novalidate={"novalidate"}>
                        <Grid md={5} xs={12} className="add-spot-container">
                            <h1>Añadir Spot</h1>
                            <Field
                                label={"Nombre"}
                                as={TextField} name={"name"}
                                fullWidth
                                value={values.name}
                                error={touched.name && errors.name}
                                helperText={(touched.name && errors.name) ? errors.name : ""}
                                className={"form-field"}
                                onChange={(e) => {
                                    setFieldTouched("name", true);
                                    setFieldValue("name", e.target.value)
                                }}
                            />
                            <Field
                                label={"Descripción"}
                                as={TextField} name={"description"}
                                fullWidth
                                value={values.description}
                                error={touched.description && errors.description}
                                helperText={(touched.description && errors.description) ? errors.description : ""}
                                className={"form-field"}
                                onChange={(e) => {
                                    setFieldTouched("description", true);
                                    setFieldValue("description", e.target.value)
                                }}
                            />
                            <Button
                                className="form-field"
                                variant="outlined"
                                color="primary"
                                component="label"
                                onClick={() => setOpenDialog(true)}
                            >
                                Seleccionar ubicación
                            </Button>
                            <span>Coordenadas{spotCoords ? ` = (${spotCoords.longitude}, ${spotCoords.latitude})` : ""}</span>
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
                            <Button className="form-field" variant="contained" color="primary" onClick={submitForm}>
                                Enviar
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </>
    )
}


export default AddSpotScreen;
