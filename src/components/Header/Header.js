import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import "./header.css";
import Logo from "../common/Logo";
import ThemeToggleButton from "./ThemeToggleButton";
import Box from "@mui/material/Box";


export default function Header() {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
      }}>
      <AppBar>
        <Toolbar>
          <Link href="/">
            <Logo />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <ThemeToggleButton/>
        </Toolbar>
      </AppBar>
    </Box>
    // <div className="navbar">
    //   <div className="navbar-wrapper">
    //     <div className="menu">
    //       <div className="logo">
    //         <img src={Logo} alt="" />
    //       </div>
    //       <div className="dark-mode-icon">
    //         <div className="dark-mode-button">
    //           {icon}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};