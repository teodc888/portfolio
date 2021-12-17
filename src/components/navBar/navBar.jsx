import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{bgcolor:"#b71c1c"}}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            PORTFOLIO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}