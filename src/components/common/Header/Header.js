import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Logo from "../Logo";
import ThemeToggleButton from "./ThemeToggleButton";
import Box from "@mui/material/Box";


export default function Header() {
  return (
      <AppBar elevation={0}>
        <Toolbar>
          <Link href="/">
            <Logo />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <ThemeToggleButton/>
        </Toolbar>
      </AppBar>
  );
};
