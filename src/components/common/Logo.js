import React from "react";
import Box from "@mui/material/Box";
import { LOGO_IMG_PATH } from "../../utils";

export default function Logo() {
    return (
        <Box
            sx={{
                display: "inline-flex",
                alignItems: "center"
            }}>
            <img 
                src={LOGO_IMG_PATH}
                height={"28px"}
            />
        </Box>
    );
}