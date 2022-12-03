import React from "react";
import Box from "@mui/material/Box";
import Header from "./common/Header/Header";
import Home from "./Home/Home";
import Container from "@mui/material/Container"


export default function Page(child) {
    return (
        <div style={{height: "100vh"}}>
            <Header/>
            <Container maxWidth="xl" sx={{height: "100%"}}>
                <Box sx={{height: "100%"}}>
                    <Home/>
                </Box>
            </Container>
        </div>        
    );
}
