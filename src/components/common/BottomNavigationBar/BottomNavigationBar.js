import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SECTIONS, SOCIALS } from "../../../utils";
import IconButton from '@mui/material/IconButton';


export default function BottomNavigationBar() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography
          variant="body2"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Developed by Shankar
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          {SECTIONS.map((section) => (
            <Button key={section} sx={{ color: '#fff' }}>
              {section}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {SOCIALS.map((social) => (
            <IconButton key={social.title} href={social.url} size="large" color="#fff">
                {social.icon}
            </IconButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
