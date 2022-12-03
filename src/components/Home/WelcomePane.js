import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";


export default function WelcomePane() {
    const start = new Date('2016-01-01T00:00:00');
    const today = new Date();
    const num_of_years = today.getFullYear() - start.getFullYear();

    return (
        <Box 
            sx={{
                margin: "0 5% 0 5%",
            }}>
            <Typography variant="h2" fontWeight={"fontWeightBold"} mt={1} mb={2}>
                Welcome to Linux Boulevard!
            </Typography>
            <Typography variant="h5">
                I am Shankar. I have been living in the bash terminal on Linux
                Boulevard for the past {num_of_years} years. I architect solutions on React, Flutter, Python and Bash.
            </Typography>
        </Box>
    );
}