import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PropTypes from "prop-types";


export default function ThemeToggleButton({isLightTheme}) {
    return (
        <Box
            sx={{
                display: "inline-flex",
                alignItems: "center"
            }}>
            <IconButton>
                {isLightTheme ? <LightModeIcon color="black" size={25} /> : <DarkModeIcon color="black" size={25} />}
            </IconButton>
        </Box>
    );
}


ThemeToggleButton.propTypes = {
    isLightTheme: PropTypes.bool,
}
  
ThemeToggleButton.defaultProps = {
isLightTheme: true,
}
