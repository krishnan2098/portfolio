import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Header from '../Header/Header';


export default function Layout(child) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <Header/>
        </Box>
    );
}
