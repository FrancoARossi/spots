import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import PropTypes from "prop-types";

const FullScreenDialog = ({children, open, onClose, transitionComponent, headerTextComponent, className}) => {
    return (
        <Dialog open={open} onClose={onClose}
                TransitionComponent={transitionComponent}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit"
                                onClick={onClose} aria-label="close">
                        <FontAwesomeIcon icon={faTimes}/>
                    </IconButton>
                    {headerTextComponent}
                </Toolbar>
            </AppBar>
            <div className={className}>
                {children}
            </div>
        </Dialog>
    )
}

FullScreenDialog.propTypes = {
    children: PropTypes.elementType,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    transitionComponent: PropTypes.elementType,
    headerTextComponent: PropTypes.elementType,
    className: PropTypes.string,
}

export default FullScreenDialog;
