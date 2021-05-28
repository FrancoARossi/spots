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
import PropTypes from "prop-types";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AddSpotScreen = ({createSpotRequest}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [spotCoords, setSpotCoords] = useState(null);


    //TODO: Re-do tags logic (DISGUSTING)
    const isSelected = (tag, values) => {
        return values?.tags.includes(tag);
    }

    const handleTagClick = (e, tag, values, setFieldValue, setFieldTouched) => {
        e.preventDefault();
        setFieldTouched("tags", true);
        if (isSelected(tag, values)) {
            setFieldValue("tags", values.tags.filter((_tag) => _tag !== tag));
        } else {
            setFieldValue("tags", [...values.tags, tag]);
        }
    }

    const onLocationSelect = (event, setFieldValue) => {
        setSpotCoords(event.lngLat);
        setFieldValue("longitude", event.lngLat[0]);
        setFieldValue("latitude", event.lngLat[1]);
    }

    const headerTextComponent = () => (
        !spotCoords ?
            <span className={"dialog-header-text"}>Seleccione una ubicación en el mapa</span>
            :
            <span className={"dialog-header-text"}>Ubicación seleccionada</span>
    )

    const renderTags = (values, setFieldValue, setFieldTouched) => (
        <div className={"tags-center"}>
            <Button
                onClick={(e) => handleTagClick(e, "parque", values, setFieldValue, setFieldTouched)}
                key={"parque"}
                color="primary"
                variant={isSelected("parque", values) ? "contained" : "outlined"}
                size="small"
            >
                Parque
            </Button>
            <Button
                onClick={(e) => handleTagClick(e, "urbano", values, setFieldValue, setFieldTouched)}
                key="urbano"
                color="primary"
                variant={isSelected("urbano", values) ? "contained" : "outlined"}
                size="small"
            >
                Urbano
            </Button>
            <Button
                onClick={(e) => handleTagClick(e, "interior", values, setFieldValue, setFieldTouched)}
                key={"interior"}
                color="primary"
                variant={isSelected("interior", values) ? "contained" : "outlined"}
                size="small"
            >
                Interior
            </Button>
            <Button
                onClick={(e) => handleTagClick(e, "naturaleza", values, setFieldValue, setFieldTouched)}
                key={"naturaleza"}
                color="primary"
                variant={isSelected("naturaleza", values) ? "contained" : "outlined"}
                size="small"
            >
                Naturaleza
            </Button>
        </div>
    )

    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    latitude: 0,
                    longitude: 0,
                    images: [],
                    tags: []
                }}
                validationSchema={
                    object({
                        name: yup.string().required("Debe introducir un nombre"),
                        description: yup.string().required("Debe ingresar una pequeña descripción"),
                        latitude: yup.number().test("check-latitude", "Debe seleccionar la ubicación", (val) => val !== 0),
                        longitude: yup.number().test("check-longitude", "Debe seleccionar la ubicación", (val) => val !== 0),
                        images: yup.array(),
                        tags: yup.array().test("atleast-one-tag", "Debe seleccionar al menos un tag", (value) => value.length > 0),
                    })
                }
                onSubmit={(values) => createSpotRequest(values)}
            >
                {({errors, values, touched, setFieldValue, setFieldTouched, submitForm}) => (
                    <Form>
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
                                className={`form-field ${(errors.latitude && touched.latitude) && "error-button"}`}
                                variant="outlined"
                                color="primary"
                                component="label"
                                onClick={() => {
                                    setFieldTouched("latitude", true);
                                    setOpenDialog(true)
                                }}
                            >
                                Seleccionar ubicación
                            </Button>
                            {(touched.latitude && errors.latitude) && <span
                                className={"error-message"}>{errors.latitude}</span>}
                            <FullScreenDialog
                                open={openDialog}
                                onClose={() => setOpenDialog(false)}
                                transitionComponent={Transition}
                                headerTextComponent={headerTextComponent()}
                                className={"map-container"}
                            >
                                <Map
                                    selectLocation
                                    onClick={(event) => onLocationSelect(event, setFieldValue)}
                                    width={"100%"}
                                    height={"100%"}
                                    top={"60px"}
                                    left={"0px"}
                                >
                                    {spotCoords &&
                                    <Marker
                                        longitude={spotCoords[0]}
                                        latitude={spotCoords[1]}
                                    >
                                        <FontAwesomeIcon icon={faMapMarkerAlt}
                                                         className={"location-selected"}/>
                                    </Marker>}
                                </Map>
                            </FullScreenDialog>
                            <div>
                                {spotCoords?.length > 0 &&
                                <span>Coordenadas{` = (${spotCoords[0]}, ${spotCoords[1]})`}</span>}
                            </div>
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
                            {renderTags(values, setFieldValue, setFieldTouched)}
                            {(errors.tags && touched.tags) && <span
                                className={"error-message"}>{errors.tags}</span>}
                            <Button className="form-field" variant="contained" color="primary"
                                    onClick={Object.entries(errors).length === 0 && submitForm}>
                                Enviar
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

AddSpotScreen.propTypes = {
    createSpotRequest: PropTypes.func,
}

export default AddSpotScreen;
