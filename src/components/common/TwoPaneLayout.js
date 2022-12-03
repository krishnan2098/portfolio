import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";


export default function TwoPaneLayout({children}) {
    const [leftPane, rightPane] = children;
    return (
        <Grid 
            container 
            spacing={2} 
            sx={{height: "100%"}}
        >
            <Grid 
                item 
                xs={6} 
                container
                alignContent={"center"}
                sx={{height: "100%"}}
            >
                {leftPane}
            </Grid>
            <Grid 
                item 
                xs={6} 
                container
                alignContent={"center"}
                sx={{height: "100%"}}
            >
                {rightPane}
            </Grid>
        </Grid>
    );
}

TwoPaneLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}